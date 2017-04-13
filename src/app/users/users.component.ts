import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { User } from 'app/user';
import { UserService } from 'app/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[] = [];
  allUsers: User[] = [];

  nameSearch = '';

  @ViewChild('idFilter') idFilter: ElementRef;
  @ViewChild('usernameFilter') usernameFilter: ElementRef;
  @ViewChild('nameFilter') nameFilter: ElementRef;
  @ViewChild('emailFilter') emailFilter: ElementRef;

  constructor(private userService: UserService)
  {
  }

  ngOnInit()
  {
      this.allUsers = this.userService.getAll();
      this.users = this.allUsers;

  }

  onFilterChange(event: any) {
      this.users = this.allUsers.filter((user) => {
          return String(user.id).includes(this.idFilter.nativeElement.value);
      }).filter((user) => {
          return user.username.includes(this.usernameFilter.nativeElement.value);
      }).filter((user) => {
          return (user.firstname + ' ' + user.lastname).includes(this.nameFilter.nativeElement.value);
      }).filter((user) => {
          return user.email.includes(this.emailFilter.nativeElement.value);
      });
  }

  cleanSearchCriteria() {
      this.users = this.allUsers;
      this.idFilter.nativeElement.value = '';
      this.usernameFilter.nativeElement.value = '';
      this.nameFilter.nativeElement.value = '';
      this.emailFilter.nativeElement.value = '';
  }
}
