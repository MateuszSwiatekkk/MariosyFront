import {Component, OnInit} from '@angular/core';
import {MariosService} from "../../services/marios.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  receivedCount: number=0;
  sentCount: number=0;
  selectedUserId: string='';
  constructor(private mariosService: MariosService) {}
ngOnInit() {
  const storedId = localStorage.getItem('selectedUserId');
  if (storedId) {
    this.selectedUserId = storedId;
    this.updateCounts();
  }
  console.log(this.selectedUserId)
}

  private updateCounts(): void {
    this.mariosService.countReceivedMarios(this.selectedUserId).subscribe(receivedCount => {
      this.receivedCount = receivedCount;
    });

    this.mariosService.countSentMarios(this.selectedUserId).subscribe(sentCount => {
      this.sentCount = sentCount;
    });
  }
}
