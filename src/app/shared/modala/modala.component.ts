import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {Marios} from "../../interfaces/marios";
import {MariosService} from "../../services/marios.service";
import {Router} from "@angular/router";
@Component({
  selector: 'app-modala',
  templateUrl: './modala.component.html',
  styleUrls: ['./modala.component.css']
})
export class ModalaComponent implements OnInit{
  displayText:string=''

  constructor(@Inject(MAT_DIALOG_DATA) public data: {marios: Marios},private mariosService:MariosService,private router:Router) { }

  ngOnInit() {
    if (this.router.url === '/sentMarios') {
      this.displayText = "To: " + this.data.marios.senderData.name + " "+this.data.marios.senderData.surname;
    } else {
      this.displayText = "From: " + this.data.marios.senderData.name + " " + this.data.marios.senderData.surname;
    }
  }

  getMariosTypeIcon(): string {
    return this.mariosService.getMariosTypeIcon(this.data.marios.mariosType);
  }

}
