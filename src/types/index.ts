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
