import { Injectable } from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(private snackBar: MatSnackBar) { }

  openSnackbar(message: string): void {
    this.snackBar.open(message, '', {
      duration: 1500,
      panelClass: ['blue-snackbar']
    });
  }
}
