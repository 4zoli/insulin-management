import { Component, OnInit } from '@angular/core';
import { AppComponent} from '../../app.component';

@Component({
  selector: 'app-get-patient-bundle',
  templateUrl: './get-patient-bundle.component.html',
  styleUrls: ['./get-patient-bundle.component.css']
})
export class GetPatientBundleComponent implements OnInit {
  constructor(public appcomponent: AppComponent) { }

  ngOnInit(): void {
  }

}
