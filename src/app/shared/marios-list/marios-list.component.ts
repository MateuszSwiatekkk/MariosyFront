import {Component, Input, OnInit} from '@angular/core';
import {MariosService} from "../../services/marios.service";
import {Marios} from "../../interfaces/marios";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {ModalaComponent} from "../modala/modala.component";

@Component({
  selector: 'app-marios-list',
  templateUrl: './marios-list.component.html',
  styleUrls: ['./marios-list.component.css']
})
export class MariosListComponent implements OnInit{

  constructor(private mariosService: MariosService,private dialog:MatDialog) {}

  @Input() marioses!: Marios[];
  ngOnInit(): void {}
  openDialog(marios:Marios) {
    this.dialog.open(ModalaComponent, {
      height: '200px',
      width: '500px',
      data: {
        marios:marios
      },
    });
  }
}
