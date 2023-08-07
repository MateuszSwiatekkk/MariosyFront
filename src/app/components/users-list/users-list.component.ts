import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";
import {User} from "../../interfaces/user";

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  constructor(private userService: UserService) {
  }

  users: User[] = []

  ngOnInit() {
    this.userService.users.subscribe(data => {
      this.users = data
      if (data && data.length > 0) {
        this.users = data;
        localStorage.setItem('selectedUserId', this.users[0].externalKeyUser);
      }
    })
  }

  onUserChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    const selectedUserId = selectElement.value;
    localStorage.setItem('selectedUserId', selectedUserId);
    // console.log(localStorage.getItem('selectedUserId'));
  }

}
