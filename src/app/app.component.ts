import {AuthService} from './shared/services/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  smartphone: any = [];
  constructor(public auth: AuthService, private  api: ApiService) {
    this.getSmartphones();
  }
    getSmartphones()  {
      this.api.getSmartphone()
        .subscribe(data => {
          /*for (const d of (data as any)) {
            this.smartphone.push({
              id: d.id,
              resourceType: d.resourceType
            });
          }*/
          this.smartphone.push({
            id: data.id,
            resourceType: data.resourceType,
            text: data.text
          });
          console.log(this.smartphone);
        });
    }

}
