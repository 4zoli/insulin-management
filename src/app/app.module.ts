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
// tslint:disable-next-line:max-line-length
import { GetMedicationAdministrationBundleComponent } from './components/get-medication-administration-bundle/get-medication-administration-bundle.component';
import {MatMenuModule} from '@angular/material/menu';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';
import {PostMedicationAdministrationComponent} from './components/post-medication-administration/post-medication-administration.component';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './header/header.component';

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
    MatCardModule,
    HttpClientModule,
    MatMenuModule,
    FormlyModule.forRoot(),
    FormlyMaterialModule
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
    HeaderComponent
  ],
  bootstrap: [AppComponent],
  providers: [AuthGuard]
})

export class AppModule { }
