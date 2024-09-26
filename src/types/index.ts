export interface UserSignupFormData extends FormData {
  email: string;
  password: string;
  name: string;
  profileImageUrl: File;
  local: string;
}

export interface TrainerSignupFormData extends FormData {
  email: string;
  password: string;
  name: string;
  trainerProfileImageUrl: File;
  gender: string;
}
