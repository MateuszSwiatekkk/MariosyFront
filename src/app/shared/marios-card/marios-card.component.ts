import {Component, Input} from '@angular/core';
import {Marios} from "../../interfaces/marios";

@Component({
  selector: 'app-marios-card',
  templateUrl: './marios-card.component.html',
  styleUrls: ['./marios-card.component.css']
})
export class MariosCardComponent {
 @Input() marios!:Marios;
}
