
export type IUser = {
  name: string;
  email: string;
  password: string;
  role: 'superAdmin' | 'admin' | 'doctor' | 'user';
  isActive?: boolean;
}