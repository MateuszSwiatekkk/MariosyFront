import {Component} from '@angular/core';
import {mariosPayload} from "../../interfaces/mariosPayload";
import {MariosService} from "../../services/marios.service";
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-add-marios',
  templateUrl: './add-marios.component.html',
  styleUrls: ['./add-marios.component.css']
})
export class AddMariosComponent {
  form: FormGroup;

  errorMessages = {
    title: 'Title required',
    message: 'Message required',
  };

  constructor(private mariosService: MariosService, private router: Router, private fb: FormBuilder) {
    this.form = this.fb.group({
      mariosType: ['WOW!', Validators.required],
      title: ['Marios 4 U', Validators.required],
      message: ["Just 'cause you rock!", Validators.required],
      recipients: [[], [Validators.required]]
    });
  }

  addMessage() {
    if (this.form.invalid) {
      return;
    }

    const selectedUserId = this.getSenderID();
    let recipients = this.getRecipientIDs();

    if (recipients) {
      recipients = JSON.parse(recipients);
    }

    const mariosData = this.createPayload(selectedUserId, recipients);

    this.mariosService.addMarios(mariosData).subscribe(
      () => {
        localStorage.removeItem('recipientIds');
      },
      error => console.error(error)
    );
    window.location.reload();
  }

  private createPayload(selectedUserId:string|null,recipients:string|null): mariosPayload {
    return {
      mariosTypes: this.form.get('mariosType')!.value,
      externalKeyUser: selectedUserId!,
      recipients: recipients!,
      title: this.form.get('title')!.value,
      message: this.form.get('message')!.value
    }
  }

  private getSenderID():string|null{
    return localStorage.getItem('selectedUserId');
  }

  private getRecipientIDs():string|null{
   return localStorage.getItem('recipientIds');
  }

  onRecipientsError(error: boolean) {
    if (error) {
      this.form.get('recipients')?.setErrors({ required: true });
    } else {
      this.form.get('recipients')?.setErrors(null);
    }
  }
}

