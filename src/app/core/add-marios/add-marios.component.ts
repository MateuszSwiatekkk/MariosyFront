import {Component} from '@angular/core';
import {MariosService} from "../../services/marios.service";
import {mariosPayload} from "../../interfaces/mariosPayload";

@Component({
  selector: 'app-add-marios',
  templateUrl: './add-marios.component.html',
  styleUrls: ['./add-marios.component.css']
})
export class AddMariosComponent {
  mariosType: string = 'Good Job';
  message: string = "Just 'cause you rock!"

  constructor(private mariosService: MariosService) {
  }

  onTypeClick(message: string) {
    this.mariosType = message;
    // console.log(this.mariosType);
  }

  addMessage() {
    this.message = `${this.message}`;

    const selectedUserId = localStorage.getItem('selectedUserId');
    let recipients = localStorage.getItem('recipientIds');

    if (recipients) {
      recipients = JSON.parse(recipients);
    }

    const mariosData: mariosPayload = {
      mariosType: this.mariosType,
      externalKeyUser: selectedUserId!,
      recipients: recipients!,
      message: this.message
    };

    this.mariosService.addMarios(mariosData).subscribe(
      () => {
        localStorage.removeItem('recipientIds');
      },
      error => console.error(error)
    );
  }
}

