import { Injectable } from '@angular/core';

import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BasicServiceService } from './basic-service.service';
import { environment } from 'src/environments/environment';
import { User } from '../Bean/User';
import { patient } from '../Bean/Patient';
import { Booking } from '../Bean/Booking';
import { Report } from '../Bean/Report';

@Injectable({
  providedIn: 'root'
})
export class ApprovalService {

springURL = environment.baseUrl;

  constructor(private basicServiceService :BasicServiceService, private http: HttpClient) { }





  ///Doc
  getUnapprovedDoctors(): Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Bearer ' + this.basicServiceService.getToken());
    console.log(headers);
    return this.http.get(this.springURL+ "/medicare-service/user/doctorapproverequest", { headers });
  }
  

  OnApp(user : User) {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Bearer ' + this.basicServiceService.getToken());
    console.log(headers);
    return this.http.put(this.springURL+ "/medicare-service/user/admindoctorupdate", user , { headers });
  }

  onReject(id: number) {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Bearer ' + this.basicServiceService.getToken());
    return this.http.delete(this.springURL + "/medicare-service/user/" +id , { headers });
  }






  ///Pat
  getUnapprovedPatient(): Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Bearer ' + this.basicServiceService.getToken());
    console.log(headers);
    return this.http.get(this.springURL+ "/medicare-service/user/patientapproverequest", { headers });
  }
  

  OnAppPatient(user : User) {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Bearer ' + this.basicServiceService.getToken());
    console.log(headers);
    return this.http.put(this.springURL+ "/medicare-service/user/adminpatientupdate", user , { headers });
  }

  onRejectPatient(id: number) {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Bearer ' + this.basicServiceService.getToken());
    return this.http.delete(this.springURL + "/medicare-service/user/patient/" +id, { headers });
  }





///DocPAt
  getUnapprovedPatientByDoctor(patientName:string) {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Bearer ' + this.basicServiceService.getToken());
    console.log(headers);
    return this.http.get<patient[]>(this.springURL+ "/medicare-service/booking/"+patientName, { headers });
  }



  OnAppPatientByDoctor(booking : patient, doctorName:string) {
    console.log(booking);
    console.log(doctorName);  
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Bearer ' + this.basicServiceService.getToken());
    console.log(headers);
    return this.http.put(this.springURL+ "/medicare-service/user/doctorpatientupdate/"+doctorName, booking , { headers });
  }

  onRejectPatientByDoctor(id: number,doctorName:string) {
    console.log(id+" "+doctorName);
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Bearer ' + this.basicServiceService.getToken());
    return this.http.delete(this.springURL + "/medicare-service/user/doctorpatientdelete/" +id +"/"+doctorName, { headers });
  }






  getApprovedPatientByDoctor(doctorName:string) {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Bearer ' + this.basicServiceService.getToken());
    console.log(doctorName);

    return this.http.get<patient[]>(this.springURL+ "/medicare-service/booking/doctorapproved/"+doctorName, { headers });
  }

/////Report form 


getParticularPatientReport(patientId:number,doctorName:string) {
  let headers = new HttpHeaders();
  headers = headers.set('Authorization', 'Bearer ' + this.basicServiceService.getToken());
  console.log(doctorName);

  return this.http.get<Report>(this.springURL+ "/medicare-service/user/genaratereport/"+patientId+"/"+doctorName, { headers });
}


}
