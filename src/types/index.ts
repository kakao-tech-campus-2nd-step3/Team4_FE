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
  id: number;
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

export interface Proposal {
  userId: number;
  totalCount: number;
  price: number;
}

export interface TrainerProposalResponse {
  id: number;
  userName: string;
  profileImageUrl: string;
  totalCount: number;
  price: number;
  status: string;
}

export interface UserProposalResponse {
  ptId: number;
  trainerId: number;
  trainerName: string;
  trainerProfileImageUrl: string;
  gymName: string;
  totalCount: number;
  price: number;
}

export interface TrainerProfileForUser {
  name: string;
  gender: string;
  profileImageUrl: string;
  gymName: string;
}

export interface LinkedClients {
  id: number;
  userId: number;
  userName: string;
  profileImageUrl: string;
}

export interface UserPtDetail {
  trainerId: number;
  trainerName: string;
  gymName: string;
  count: number;
  profileImageUrl: string;
  schedules: Schedule[];
}

export interface TrainerPtDetail {
  userId: number;
  userName: string;
  profileImageUrl: string;
  schedules: Schedule[];
}

export interface Schedule {
  scheduleId: number;
  isCompleted: string;
  date: string;
}
