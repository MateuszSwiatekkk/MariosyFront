import {Component, OnInit} from '@angular/core';
import {MariosService} from "../../services/marios.service";
import { Router } from '@angular/router';
import {Marios} from "../../interfaces/marios";
import {KeycloakService} from "keycloak-angular";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  receivedCount: number=0;
  sentCount: number=0;
  selectedUserId: string = '';
  marioses:Marios[] = [];

  constructor(
    private mariosService: MariosService,
    private router: Router,
    private keycloak: KeycloakService
  ) {}
  ngOnInit() {
    this.keycloak.loadUserProfile().then(userProfile => {
      this.selectedUserId = userProfile.id  ??  'default';
      localStorage.setItem('selectedUserId',this.selectedUserId);

      this.updateCounts();

      this.mariosService.getMarios().subscribe(marioses => {
        this.marioses = marioses;
        this.marioses.sort((a, b) => b.mariosId - a.mariosId);
      });
    })
  }

  onAddMariosClick() {
    this.router.navigate(['/createMarios']);
  }

  onSentMariosClick() {
    this.router.navigate(['/sentMarios']);
  }

  onReceivedMariosClick() {
    this.router.navigate(['/receivedMarios'])
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
