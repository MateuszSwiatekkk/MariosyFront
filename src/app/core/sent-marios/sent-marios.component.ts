import {Component, OnInit} from '@angular/core';
import {MariosService} from "../../services/marios.service";
import {Marios} from "../../interfaces/marios";

@Component({
  selector: 'app-sent-marios',
  templateUrl: './sent-marios.component.html',
  styleUrls: ['./sent-marios.component.css']
})
export class SentMariosComponent implements OnInit {
  marioses: Marios[] = [];
  userId: string = '';

  constructor(private mariosService: MariosService) {
  }

  ngOnInit() {
    const storedId = localStorage.getItem('selectedUserId')
    if (storedId !== null) {
      this.userId = storedId;
      this.mariosService.getSentMarios(this.userId).subscribe(marioses => {
        this.marioses = marioses;
        this.marioses = marioses.sort((a, b) => b.mariosId - a.mariosId);
      });

    }

  }
}
