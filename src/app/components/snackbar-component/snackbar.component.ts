import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-snackbar-component',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.css']
})
export class SnackbarComponent implements OnInit {
  // durationInSeconds = 5; TODO

  constructor(private snackBar: MatSnackBar) {}

  successMesage(msg: string, duration: number = 3000) {
    this.snackBar.open(msg)._dismissAfter(duration);
  }

  successMesageOnTop(msg: string, duration: number = 3000) {
    this.snackBar.open(msg, '', {
      duration: 2000,
      verticalPosition: 'top',
      panelClass: ['warning']
    });
  }

  ngOnInit(): void {
  }

}
