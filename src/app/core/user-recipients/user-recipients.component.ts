import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";
import {User} from "../../interfaces/user";

@Component({
  selector: 'app-user-recipients',
  templateUrl: './user-recipients.component.html',
  styleUrls: ['./user-recipients.component.css']
})
export class UserRecipientsComponent implements OnInit {
  users: User[] = [];
  recipientIds: string[] = [];

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    const loggedInUserId = localStorage.getItem('selectedUserId');
    this.userService.users.subscribe(data => {
      this.users = data.filter(user => user.externalKeyUser !== loggedInUserId); //exclude logged in user
    });
  }

  onRecipientChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    const selectedRecipientId = selectElement.value;
    this.recipientIds.push(selectedRecipientId);
     // console.log(this.recipientIds);
    localStorage.setItem('recipientIds', JSON.stringify(this.recipientIds));
  }

}
