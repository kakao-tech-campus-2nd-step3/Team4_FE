import { ChakraProvider } from '@chakra-ui/react';
import { Routes } from './routes';
import { AuthProvider } from '@/provider/AuthProvider';

function App() {
  return (
    <ChakraProvider>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </ChakraProvider>
  );
}

export default App;
