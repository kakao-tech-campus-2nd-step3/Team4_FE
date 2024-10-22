export interface UserSignupFormData {
  email: string;
  password: string;
  passwordConfirm: string;
  name: string;
  profileImage: File | null;
  location: string;
}

export interface TrainerSignupFormData {
  email: string;
  password: string;
  passwordConfirm: string;
  name: string;
  profileImage: File | null;
  gender: string;
}

export interface LoginData {
  email: string;
  password: string;
}

export interface AuthContextType {
  isAuthenticated: boolean;
  type: 'user' | 'trainer' | null;
  setAuth: (auth: {
    isAuthenticated: boolean;
    type: 'user' | 'trainer' | null;
  }) => void;
}

export interface UserProfile {
  profileImageUrl: string;
  name: string;
  location: string;
}

export interface TrainerProfile {
  profileImageUrl: string;
  name: string;
  gender: string;
}

export interface Career {
  career: string;
}

export interface BodyInfo {
  infoId: number;
  inbodyImageUrl: string;
  createDate: string;
}

export interface CareerResponse {
  id: number;
  career: string;
}

export interface Preference {
  sportsId: number;
  gender: string;
  range: number;
  goal: string;
}

export interface PreferenceResponse {
  userId: number;
  name: string;
  inbodyImageUrl: string;
  goal: string;
  profileImageUrl: string;
}

export interface ChattingList {
  Id: number;
  personId: number;
  personName: string;
  personProfileImageUrl: string;
}

export interface Message {
  roomId: number;
  content: string;
  sender: string;
  timestamp: string;
}