import { Component, OnInit } from '@angular/core';
import {GoogleAuthService} from '../../shared/services/google-auth/google-auth.service';
import {AppComponent} from '../../app.component';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor(public auth: GoogleAuthService, public appcomponent: AppComponent) {
    this.appcomponent.snackBar.successMesage('Üdvözöllek az oldalon!');
  }


  ngOnInit(): void {}



}
