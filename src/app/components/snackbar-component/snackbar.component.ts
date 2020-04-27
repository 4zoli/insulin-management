import { Component } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-snackbar-component',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.css']
})
export class SnackbarComponent {
  constructor(private snackBar: MatSnackBar) {}

  successMesage(msg: string, duration: number = 3000) {
    this.snackBar.open(msg)._dismissAfter(duration);
  }
}
