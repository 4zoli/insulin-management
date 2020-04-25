import { Component, OnInit } from '@angular/core';
import {GoogleAuthService} from '../../shared/services/google-auth/google-auth.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor(public auth: GoogleAuthService) {}


  ngOnInit(): void {}



}
