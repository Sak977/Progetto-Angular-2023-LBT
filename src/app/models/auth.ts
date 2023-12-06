export class RegisterDTO {
  constructor(
    public nome: string = '',
    public email: string = '',
    public password: string = ''
  ) {}
}

export class LoginDTO {
  constructor(public email: string = '', public password: string = '') {}
}
export class ContactDTO {
  constructor(
    public email: string = '',
    public name: string = '',
    public nickname: string = '',
    public phone: string = '',
    public message: string = '',
    public privacy: boolean = false
  ) {}
}

export interface Contact {
  id: number;
  email: string;
  name: string;
  nickname: string;
  phone: string;
  message: string;
  privacy: boolean;
}

export interface User {
  email: string;
  id: number;
  nome: string;
}

export interface LoggedUser {
  user: User;
  accessToken: string;
}
