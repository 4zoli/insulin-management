import { Component, OnInit } from '@angular/core';
import { AppComponent} from '../../app.component';

@Component({
  selector: 'app-get-medication-dispense-bundle',
  templateUrl: './get-medication-dispense-bundle.component.html',
  styleUrls: ['./get-medication-dispense-bundle.component.css']
})
export class GetMedicationDispenseBundleComponent implements OnInit {
  constructor(public appcomponent: AppComponent) { }

  ngOnInit(): void {
  }

}
