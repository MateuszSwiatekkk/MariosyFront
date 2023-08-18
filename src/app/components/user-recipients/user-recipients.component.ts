import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UserService} from "../../services/user.service";
import {User} from "../../interfaces/user";
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-user-recipients',
  templateUrl: './user-recipients.component.html',
  styleUrls: ['./user-recipients.component.css']
})
export class UserRecipientsComponent implements OnInit {
  users: User[] = [];
  recipientIds: string[] = [];
  error: boolean = true;
  @Output() recipientsError = new EventEmitter<boolean>();

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
      this.checkRecipientsError();
    });
  }

  recipientsControl = new FormControl<User[]>([], Validators.required);

  checkRecipientsError() {
    const error = !this.recipientIds.length;
    this.error = error;
    this.recipientsError.emit(error);
  }

  onRecipientRemoved(user: User) {
    const recipients = this.recipientsControl.value;
    if (recipients) {
      this.removeFirst(recipients, user);
      this.recipientsControl.setValue(recipients);
    }
  }

  private removeFirst<T>(array: T[], toRemove: T): void {
    const index = array.indexOf(toRemove);
    if (index !== -1) {
      array.splice(index, 1);
    }
  }
}
