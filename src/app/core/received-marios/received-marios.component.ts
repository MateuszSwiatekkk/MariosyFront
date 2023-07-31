import {Component, OnInit} from '@angular/core';
import {Marios} from "../../interfaces/marios";
import {MariosService} from "../../services/marios.service";

@Component({
  selector: 'app-received-marios',
  templateUrl: './received-marios.component.html',
  styleUrls: ['./received-marios.component.css']
})
export class ReceivedMariosComponent implements OnInit {

  marioses: Marios[] = [];
  userId: string = '';

  constructor(private mariosService: MariosService) {
  }

  ngOnInit(): void {
    const storedId = localStorage.getItem('selectedUserId');
    if (storedId !== null) {
      this.userId = storedId;
      this.mariosService.getReceivedMarios(this.userId).subscribe(marioses => {
        this.marioses = marioses;
        this.marioses = marioses.sort((a, b) => b.mariosId - a.mariosId);
      });
    }
  }

}
