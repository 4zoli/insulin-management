import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './shared/routing/app-routing.module';

// Needed libs
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from './shared/guard/auth.guard';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

// Angular Material Module
import {AngularMaterialModule} from './angular-material.module';
import {MatCardModule} from '@angular/material/card';
import {HttpClientModule} from '@angular/common/http';
import {GetPatientBundleComponent} from './components/get-patient-bundle/get-patient-bundle.component';
import { GetMedicationRequestBundleComponent } from './components/get-medication-request-bundle/get-medication-request-bundle.component';
import { GetMedicationDispenseBundleComponent } from './components/get-medication-dispense-bundle/get-medication-dispense-bundle.component';
import { GetMedicationAdministrationBundleComponent } from './components/get-medication-administration-bundle/get-medication-administration-bundle.component';


const config = {
  apiKey: 'AIzaSyBP_kNEMmhtsxSEK1BVL7p5yv0yNLAddMU',
  authDomain: 'insulin-management.firebaseapp.com',
  databaseURL: 'https://insulin-management.firebaseio.com',
  projectId: 'insulin-management',
  storageBucket: 'insulin-management.appspot.com',
  messagingSenderId: '791974756775',
  appId: '1:791974756775:web:d3747990bd5b74e214b682',
  measurementId: 'G-ZRTRFECLXJ'
};

const routes: Routes = [
  { path: 'user-profile', component: UserProfileComponent,  canActivate: [AuthGuard] }
];

@NgModule({
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule,
    AngularFireAuthModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    AngularMaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    UserProfileComponent,
    GetPatientBundleComponent,
    GetMedicationRequestBundleComponent,
    GetMedicationDispenseBundleComponent,
    GetMedicationAdministrationBundleComponent
  ],
  bootstrap: [AppComponent],
  providers: [AuthGuard]
})

export class AppModule { }
