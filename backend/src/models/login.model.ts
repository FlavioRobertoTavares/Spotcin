export default class LoginModel{
  email: string;
  password: string;
  id: string;

  constructor(data: Partial<LoginModel>) {
    this.email = data.email || '';
    this.password = data.password || '';
    this.id = data.id || '';
  }
}