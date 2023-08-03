import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";
import {User} from "../../interfaces/user";
import {FormControl} from "@angular/forms";

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

    this.recipientsControl.valueChanges.subscribe((recipients: User[] | null) => {
      if (recipients) {
        this.recipientIds = recipients.map(user => user.externalKeyUser);
        localStorage.setItem('recipientIds', JSON.stringify(this.recipientIds));
      }
    });
  }

  recipientsControl = new FormControl<User[]>([]);

  // onRecipientChange(event: Event) {
  //   const selectElement = event.target as HTMLSelectElement;
  //   const selectedRecipientId = selectElement.value;
  //   this.recipientIds.push(selectedRecipientId);
  //    // console.log(this.recipientIds);
  //   localStorage.setItem('recipientIds', JSON.stringify(this.recipientIds));
  // }


  onRecipientRemoved(user: User) {
    const recipients = this.recipientsControl.value;
    if (recipients) { // Check for null here
      this.removeFirst(recipients, user);
      this.recipientsControl.setValue(recipients); // To trigger change detection
    }
  }

  private removeFirst<T>(array: T[], toRemove: T): void {
    const index = array.indexOf(toRemove);
    if (index !== -1) {
      array.splice(index, 1);
    }
  }
}
