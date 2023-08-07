import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-marios-chips',
  templateUrl: './marios-chips.component.html',
  styleUrls: ['./marios-chips.component.css']
})
export class MariosChipsComponent {

  @Input() mariosType: string='';
  @Output() mariosTypeChange = new EventEmitter<string>();

  onTypeClick(type: string) {
    this.mariosType = type;
    this.mariosTypeChange.emit(this.mariosType);
  }

}
