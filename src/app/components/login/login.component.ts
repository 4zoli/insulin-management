import { Component, OnInit } from '@angular/core';
import {GoogleAuthService} from '../../shared/services/google-auth/google-auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public auth: GoogleAuthService) { }

  ngOnInit(): void {
  }

}
