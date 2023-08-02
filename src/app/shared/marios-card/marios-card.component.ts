import {Component, Input, OnInit} from '@angular/core';
import {Marios} from "../../interfaces/marios";
import { Router } from '@angular/router';
@Component({
  selector: 'app-marios-card',
  templateUrl: './marios-card.component.html',
  styleUrls: ['./marios-card.component.css']
})
export class MariosCardComponent implements OnInit {
  @Input() marios!: Marios;
  maxCommentLength: number = 70;
  public displayText: string='';

  constructor(private router: Router) {
  }

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

  ngOnInit(): void {
    if (this.router.url === '/sentMarios') {
      this.displayText = "To: " + this.marios.senderData.name + " "+this.marios.senderData.surname;
    } else {
      this.displayText = "From: " + this.marios.senderData.name + " " + this.marios.senderData.surname;
    }
  }
}
