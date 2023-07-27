import { Component, OnInit } from '@angular/core';
import {Marios} from "../../interfaces/marios";
import {MariosService} from "../../services/marios.service";

@Component({
  selector: 'app-marios-list',
  templateUrl: './marios-list.component.html',
  styleUrls: ['./marios-list.component.css']
})
export class MariosListComponent implements OnInit{
  marioses:Marios[] = [];

  constructor(private mariosService: MariosService) {}

  ngOnInit(): void {
    this.mariosService.getMarios().subscribe(marioses => {
      this.marioses = marioses;
    });
  }
}
