import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './site/login/login.component';
import { PatientHomeComponent } from './Patient/patient-home/patient-home.component';
import { DoctorHomeComponent } from './Doctor/doctor-home/doctor-home.component';
import { AdminHomeComponent } from './Admin/admin-home/admin-home.component';
import { PatientacceptComponent } from './Admin/patientaccept/patientaccept.component';
import { DoctoracceptComponent } from './Admin/doctoraccept/doctoraccept.component';
import { BookingComponent } from './Patient/booking/booking.component';
import { DoctorSignupComponent } from './site/signup/doctor-signup/doctor-signup.component';
import { PatientSignupComponent } from './site/signup/patient-signup/patient-signup.component';
import { PatientPendingComponent } from './Doctor/patient-pending/patient-pending.component';
import { ReportGenarationComponent } from './Doctor/report-genaration/report-genaration.component';
import { EditMedicareComponent } from './Doctor/edit-medicare/edit-medicare.component';
import { ReportFormComponent } from './Doctor/report-form/report-form.component';
import { ViewReportComponent } from './Patient/view-report/view-report.component';
import { PatientDetailComponent } from './Admin/patient-detail/patient-detail.component';
import { DoctorDetailComponent } from './Admin/doctor-detail/doctor-detail.component';
import { HomeComponent } from './home/home.component';



const routes: Routes = [
  { path: 'login', component: LoginComponent },
{ path: 'admin', component: AdminHomeComponent },
{ path: 'doctor', component: DoctorHomeComponent },
{ path: 'patient', component: PatientHomeComponent },
{ path: 'doctoraccept', component: DoctoracceptComponent },
{ path: 'patientaccept', component: PatientacceptComponent },
{ path: 'booking/:id', component: BookingComponent },
{ path:'signup',component:DoctorSignupComponent},
{ path:'psignup',component:PatientSignupComponent},
{ path:'patientacceptbydoctor',component:PatientPendingComponent},
{ path:'reportgenarate',component:ReportGenarationComponent},
{ path:'editmedi',component:EditMedicareComponent},
{ path:'reportform/:id',component:ReportFormComponent},
{ path:'editmedi',component:EditMedicareComponent},
{ path:'viewreport',component:ViewReportComponent},
{ path:'doctordetail/:name',component:DoctorDetailComponent},
{ path:'patientdetail/:name',component:PatientDetailComponent},
{ path:'home', component:HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
