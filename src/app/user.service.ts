import { Injectable } from '@angular/core';
import { User } from 'app/user';

@Injectable()
export class UserService {

  users: User[] = [
    new User(1, 'Davyd', 'Melo', 'davydmelo', '123456'),
    new User(2, 'Samara', 'Freitas', 'samarafreitas', '123456'),
    new User(3, 'Samya', 'Freitas', 'samyafreitas', '123456'),
  ];

  constructor() { }

  getAll()
  {
      return this.users;
  }

}
