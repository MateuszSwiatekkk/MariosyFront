import { Component, OnInit } from '@angular/core';
import {MariosService} from "../../services/marios.service";

@Component({
  selector: 'app-marios-list',
  templateUrl: './marios-list.component.html',
  styleUrls: ['./marios-list.component.css']
})
export class MariosListComponent implements OnInit{

  constructor(private mariosService: MariosService) {}

  ngOnInit(): void {}
}
