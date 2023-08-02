import {Component, Input} from '@angular/core';
import {Marios} from "../../interfaces/marios";

@Component({
  selector: 'app-marios-card',
  templateUrl: './marios-card.component.html',
  styleUrls: ['./marios-card.component.css']
})
export class MariosCardComponent {
 @Input() marios!:Marios;
 maxCommentLength:number=70;

  getMariosTypeIcon(): string {
    let iconPath = '';

    switch (this.marios.mariosType) {
      case 'Good job!':
        iconPath = 'assets/goodjob.png';
        break;
      case 'Exceptional':
        iconPath = 'assets/exceptional.png';
        break;
      case 'Impressive':
        iconPath = 'assets/impressive.png';
        break;
      case 'Thank You':
        iconPath = 'assets/thankyou.png';
        break;
      case 'WOW!':
        iconPath = 'assets/wow.png';
        break;
      case 'I\'m Proud':
        iconPath = 'assets/improud.png';
        break;
    }
    return iconPath;
  }
}
