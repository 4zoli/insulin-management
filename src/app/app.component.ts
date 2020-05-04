
/** Needed Libs */
import { GoogleAuthService } from './shared/services/google-auth/google-auth.service';
import {Component } from '@angular/core';
import { RestApiService } from './shared/services/rest-api/rest-api.service';
import { Router } from '@angular/router';
import {SnackbarComponent} from './components/snackbar-component/snackbar.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  arrayForAnyResponse: any = [];
  userEmail: any;
  userName: any[];
  userLevel: any;
  isProfileCreated: any;

  constructor(public auth: GoogleAuthService, public api: RestApiService, public router: Router, public snackBar: SnackbarComponent) {
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
        console.log('appcomponent await getBundle');
        // @ts-ignore
        console.log(response.body.total);
        // @ts-ignore
        this.isProfileCreated = response.body.total;
      });
    });
  }
}
