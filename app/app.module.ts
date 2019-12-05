import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { LoginComponent } from './site/login/login.component';
import { AdminHomeComponent } from './Admin/admin-home/admin-home.component';
import { DoctorHomeComponent } from './Doctor/doctor-home/doctor-home.component';
import { PatientHomeComponent } from './Patient/patient-home/patient-home.component';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { DoctorSignupComponent } from './site/signup/doctor-signup/doctor-signup.component';
import { PatientSignupComponent } from './site/signup/patient-signup/patient-signup.component';
import { DoctoracceptComponent } from './Admin/doctoraccept/doctoraccept.component';
import { PatientacceptComponent } from './Admin/patientaccept/patientaccept.component';
import { BookingComponent } from './Patient/booking/booking.component';
import { PatientPendingComponent } from './Doctor/patient-pending/patient-pending.component';
import { ReportGenarationComponent } from './Doctor/report-genaration/report-genaration.component';
import { EditMedicareComponent } from './Doctor/edit-medicare/edit-medicare.component';
import { ReportFormComponent } from './Doctor/report-form/report-form.component';
import { ViewReportComponent } from './Patient/view-report/view-report.component';
import { DoctorDetailComponent } from './Admin/doctor-detail/doctor-detail.component';
import { PatientDetailComponent } from './Admin/patient-detail/patient-detail.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminHomeComponent,
    DoctorHomeComponent,
    PatientHomeComponent,
    DoctorSignupComponent,
    PatientSignupComponent,
    DoctoracceptComponent,
    PatientacceptComponent,
    BookingComponent,
    PatientPendingComponent,
    ReportGenarationComponent,
    EditMedicareComponent,
    ReportFormComponent,
    ViewReportComponent,
    DoctorDetailComponent,
    PatientDetailComponent,
    HomeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
