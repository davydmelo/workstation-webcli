import { Injectable } from '@angular/core';
import { User } from 'app/user';

@Injectable()
export class UserService {

  users: User[] = [
    new User(1, 'Davyd', 'Melo', 'davydmelo', '123456', 'davydmelo@gmail.com'),
    new User(2, 'Samara', 'Freitas', 'samarafreitas', '123456', 'samarafreitas87@gmail.com'),
    new User(3, 'Samya', 'Freitas', 'samyafreitas', '123456', 'samyafreitas@gmail.com'),
  ];

  constructor() { }

  getAll()
  {
      return this.users;
  }

}
