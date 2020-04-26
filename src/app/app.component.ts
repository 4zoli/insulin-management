
/** Needed Libs */
import { GoogleAuthService } from './shared/services/google-auth/google-auth.service';
import {Component, OnInit} from '@angular/core';
import { RestApiService } from './shared/services/rest-api/rest-api.service';
import { Patient } from './models/patient.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  arrayForAnyResponse: any = [];
  arrayForCheckProfil: any = [];
  userEmail: any;
  userName: any[];
  userLevel: any;
  isProfileCreated: any;
  postPatientData: Patient; // TODO

  constructor(public auth: GoogleAuthService, public api: RestApiService, public router: Router) {
    this.subscribeToUserDatas();
    this.checkIfProfilCreated();
  }

  subscribeToUserDatas() {
    this.auth.user$.subscribe(
      user => {
        this.userEmail = user.email;
        this.userName = user.displayName.split(' ' , 3);
        // @ts-ignore
        this.userLevel = user.userLevel;
        console.log('app.component.user.email: ' + this.userEmail);
        console.log('app.component.user.name: ' + this.userName);
        console.log('app.component.user.level: ' + this.userLevel);
      });
  }

  checkIfProfilCreated() {
    console.log('checkIfProfilCreated');
    this.auth.user$.subscribe( user => {
      this.api.getPatientBundle('?identifier=' + user.email).subscribe(response => {
        // this.arrayForCheckProfil.push(response);
        console.log('appcomponent await getBundle');
        // @ts-ignore
        console.log(response.body.total);
        // this.isProfileCreated = this.arrayForCheckProfil[0].body.total;
        // @ts-ignore
        this.isProfileCreated = response.body.total;
      });
    });
  }

  ngOnInit(): void {}
}
