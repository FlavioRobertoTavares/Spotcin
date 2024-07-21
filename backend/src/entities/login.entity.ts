export default class LoginEntity{
  email: string;
  password: string;
  id: string;

  constructor(data: Partial<LoginEntity>) {
    this.email = data.email || '';
    this.password = data.password || '';
    this.id = data.id || '';
  }
}