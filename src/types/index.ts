export interface UserSignupFormData {
  email: string;
  password: string;
  passwordConfirm: string;
  name: string;
  profileImage: File | null;
  local: string;
}

export interface TrainerSignupFormData {
  email: string;
  password: string;
  passwordConfirm: string;
  name: string;
  trainerProfileImage: File | null;
  gender: string;
}
