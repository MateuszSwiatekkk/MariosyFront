import {Component, Input, OnInit} from '@angular/core';
import {Marios} from "../../interfaces/marios";
import { Router } from '@angular/router';
import {MariosService} from "../../services/marios.service";
@Component({
  selector: 'app-marios-card',
  templateUrl: './marios-card.component.html',
  styleUrls: ['./marios-card.component.css']
})
export class MariosCardComponent implements OnInit {
  @Input() marios!: Marios;
  maxCommentLength: number = 70;
  public displayText: string='';

  constructor(private router: Router,private mariosService:MariosService) {
  }

  ngOnInit(): void {
    if (this.router.url === '/sentMarios') {
      this.displayText = "To: " + this.marios.senderData.name + " "+this.marios.senderData.surname;
    } else {
      this.displayText = "From: " + this.marios.senderData.name + " " + this.marios.senderData.surname;
    }
  }

  getMariosTypeIcon(): string {
    return this.mariosService.getMariosTypeIcon(this.marios.mariosType);
  }
}
