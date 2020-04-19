/* tslint:disable */

/** Needed Libs */
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { AuthGuard } from './shared/guard/auth.guard';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './shared/routing/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';

/** Angular Material Module */
import {AngularMaterialModule} from './angular-material.module';

/** Components - Site */
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/header/header.component';
/** Components - Functions - GET */
import {GetPatientBundleComponent} from './components/get-patient-bundle/get-patient-bundle.component';
import { GetMedicationRequestBundleComponent } from './components/get-medication-request-bundle/get-medication-request-bundle.component';
import { GetMedicationDispenseBundleComponent } from './components/get-medication-dispense-bundle/get-medication-dispense-bundle.component';
import { GetMedicationAdministrationBundleComponent } from './components/get-medication-administration-bundle/get-medication-administration-bundle.component';
/** Components - Functions - POST */
import {PostMedicationAdministrationComponent} from './components/post-medication-administration/post-medication-administration.component';
/** Components - Functions - DELETE */
import {MatCardModule} from "@angular/material/card";
import { DeleteFromDatabaseComponent } from './components/delete-from-database/delete-from-database.component';
import { GetPractitionerBundleComponent } from './components/get-practitioner-bundle/get-practitioner-bundle.component';
import { PostPatientComponent } from './components/post-patient/post-patient.component';
import { PostMedicationDispenseComponent } from './components/post-medication-dispense/post-medication-dispense.component';

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

@NgModule({
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormlyModule.forRoot(),
    FormlyMaterialModule,
    MatCardModule
  ],
  declarations: [
    AppComponent,
    UserProfileComponent,
    GetPatientBundleComponent,
    GetMedicationRequestBundleComponent,
    GetMedicationDispenseBundleComponent,
    GetMedicationAdministrationBundleComponent,
    PostMedicationAdministrationComponent,
    LoginComponent,
    HeaderComponent,
    DeleteFromDatabaseComponent,
    GetPractitionerBundleComponent,
    PostPatientComponent,
    PostMedicationDispenseComponent
  ],
  bootstrap: [AppComponent],
  providers: [AuthGuard]
})

export class AppModule { }
