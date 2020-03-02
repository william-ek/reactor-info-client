import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Reactor } from '../models/reactor';


@Component({
  selector: 'app-reactor-dialog',
  templateUrl: './reactor-dialog.component.html',
  styleUrls: ['./reactor-dialog.component.css']
})
export class ReactorDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ReactorDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public reactor: Reactor) {

  }

  closeDialog() {
    this.dialogRef.close();
  }

  ngOnInit() {
    console.log('ReactorDialogComponent.ngOnInit');
  }

}
