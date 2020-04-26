import { Component } from '@angular/core';
import {GoogleAuthService} from '../../shared/services/google-auth/google-auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(public auth: GoogleAuthService) { }
}
