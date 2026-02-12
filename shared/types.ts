export interface PublicUser {
  readonly id: string;
  readonly name: string;
  readonly email: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface SignupRequest extends LoginRequest {
  name: string;
}

export interface AuthResponse {
  token: string;
  user: PublicUser;
}
