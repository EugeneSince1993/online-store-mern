export interface IResponse {
  _id: string;
  fullName: string;
  email: string;
  avatarUrl: string;
  createdAt: string;
  token: string;
}

export interface ILoginParams {
  email: string;
  password: string;
}

export interface IRegisterParams {
  fullName: string;
  email: string;
  password: string;
  avatarUrl: string;
}
