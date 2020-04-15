import { Component, OnInit } from '@angular/core';
import { AppComponent} from '../../app.component';

@Component({
  selector: 'app-get-medication-request-bundle',
  templateUrl: './get-medication-request-bundle.component.html',
  styleUrls: ['./get-medication-request-bundle.component.css']
})
export class GetMedicationRequestBundleComponent implements OnInit {
  constructor(public appcomponent: AppComponent) { }

  ngOnInit(): void {
  }
}



