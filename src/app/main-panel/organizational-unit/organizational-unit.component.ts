import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UserService } from 'app/user.service';
import { User } from 'app/user';

@Component({
  selector: 'app-organizational-unit',
  templateUrl: './organizational-unit.component.html',
  styleUrls: ['./organizational-unit.component.css']
})
export class OrganizationalUnitComponent implements OnInit {

  @ViewChild('f') form: NgForm;
  
  public action: string;

  public users: User[];
  public selectedUsers: User[] = [];

  constructor(private route: ActivatedRoute, private userService: UserService)
  {      
  }

  ngOnInit()
  {
      this.action = this.route.snapshot.url[this.route.snapshot.url.length - 1].path;
      this.users = this.userService.getAll();
  }

  isFormDisabled(): boolean
  {
    return this.action === 'view' || this.action === 'delete';
  }

  onSelectedToTheRight()
  {
      const selected: number[] = this.form.form.value.leftSelect;

      for (let i = 0; i < this.users.length; i++)
      {
          for (let j = 0; j < selected.length; j++)
          {
                if (this.users[i].id === selected[j])
                {
                    this.selectedUsers.push(this.users[i]);
                }
          }
      }

      for (let j = 0; j < selected.length; j++)
      {
            this.users = this.users.filter((user) => {
                return user.id !== selected[j];
            });
      }

      this.users.sort((user1, user2) => user1.username.localeCompare(user2.username));
      this.selectedUsers.sort((user1, user2) => user1.username.localeCompare(user2.username));
  }

  onSelectedToTheLeft()
  {
      console.log('Left');
  }

  onSubmit()
  {
        this.form.reset();
        this.selectedUsers = [];
        this.users = this.userService.getAll();
  }

  onDelete()
  {

  }

  sponsorInWatchers(): boolean
  {
      return false;
  }
}
