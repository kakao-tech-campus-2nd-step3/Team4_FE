import { fetchAPI } from '..';
import { Client, Message, Frame } from '@stomp/stompjs';

let roomId: number = 1;

const stompClient: Client = new Client({
  brokerURL: 'ws://localhost:8080/ws-stomp',
});

stompClient.onConnect = (frame: Frame) => {
  setConnected(true);
  console.log('Connected: ' + frame);
  stompClient.subscribe('/sub/topic/room/' + roomId, (message: Message) => {
    console.log("Message received: ", message.body);  // 메시지 수신 확인
    showGreeting(JSON.parse(message.body)); // 메시지 전체를 전달하도록 수정
  });
};

stompClient.onWebSocketError = (error: Error) => {
  console.error('Error with websocket', error);
};

stompClient.onStompError = (frame: Frame) => {
  console.error('Broker reported error: ' + frame.headers['message']);
  console.error('Additional details: ' + frame.body);
};

function setConnected(connected: boolean): void {
  const connectButton = $("#connect");
  const disconnectButton = $("#disconnect");
  const conversation = $("#conversation");
  const greetings = $("#greetings");

  connectButton.prop("disabled", connected);
  disconnectButton.prop("disabled", !connected);

  if (connected) {
    conversation.show();
  } else {
    conversation.hide();
  }
  greetings.html(""); // Initialize greetings

  if (!connected) {
    console.error('Disconnected from STOMP broker.');
  }
}

function connect(): void {
  stompClient.activate();  // Activate the STOMP client
}

function disconnect(): void {
  stompClient.deactivate();
  setConnected(false);
  console.log("Disconnected");
}

function sendMessage(): void {
  if (stompClient.connected) {  // 연결이 되어 있는지 확인
    const messageContent = $("#message").val() as string; // 사용자가 입력한 메시지를 가져옵니다.
    const sender = $("#sender").val() as string;

    stompClient.publish({
      destination: "/pub/chat.sendMessage",
      body: JSON.stringify({
        'roomId': roomId,
        'content': messageContent,
        'sender': sender
      })
    });

    console.log("sender: ", sender); // 전송한 메시지 확인
    console.log("Sent message: ", messageContent); // 전송한 메시지 확인
    $("#message").val('');  // 메시지 전송 후 입력 필드 초기화
  } else {
    console.error('STOMP client is not connected.');
  }
}

interface ChatMessage {
  content: string;
}

function showGreeting(message: ChatMessage): void {
  $("#chatting").append("<tr><td>" + message.content + "</td></tr>");
}

// fetchAPI를 통한 메시지 가져오기
export const getMessage = async () => {
  return await fetchAPI({
    method: 'GET',
    endpoint: '/sub/topic/room/' + roomId,
  });
};

$(function () {
  $("form").on('submit', (e) => e.preventDefault());
  $("#connect").click(() => connect());
  $("#disconnect").click(() => disconnect());
  $("#send").click(() => sendMessage());
});
