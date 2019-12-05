import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Doctor } from '../Bean/Doctor';
import { DoctorNew } from '../Bean/doctorNew';
import { Router } from '@angular/router';
import { patient } from '../Bean/Patient';
import { Report } from '../Bean/Report';
import { MedicareServices } from '../Bean/MedicalService';

@Injectable({
  providedIn: 'root'
})
export class BasicServiceService {
private token : string = "";
userId : number;
springURL: string = environment.baseUrl;
  userExists: any;
  userName:string;
  constructor(private http: HttpClient, private router : Router) { }

  getToken(): string {
    return this.token;
  }
  setToken(token: string) {
    this.token = token;
  }


  getUserId(): number {
    return this.userId;
  }
  setUserId(userId: number) {
    this.userId = userId;
  }

  
  getUserName(): string {
    return this.userName;
  }
  setUserName(userName: string) {
    this.userName = userName;
  }




  login(username: string, password: string): Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Basic ' + btoa(username + ":" + password));
    console.log(headers);
    return this.http.get(this.springURL + "/authentication-service/authentication", { headers }); 
    
  }


  addDoctor(user: Doctor) {
    //let newUser: Doctor= { firstname: user["firstname"], lastname: user["lastname"], id: user["id"],dob: user["dob"],gender: user["gender"],password: user["password"],number: user["password"],email: user["email"],altnumber: user["altnumber"],address1: user["address1"],address2: user["address2"],state :user["state"],city:user["city"],code:user["code"],age:user["age"],degree:user["degree"],specality:user["specality"],workhours:user["workhours"],clinicname:user["clinicname"],medicareserviceid:user["medicareserviceid"],mediList: null }
    this.addDoctorUserObservable(user).subscribe(
      (data) => {
        this.userExists = data;
        if (this.userExists)
          this.router.navigate(["/login"])
      }
    )
  }
  addDoctorUserObservable(user: Doctor): Observable<any> {
    //console.log(user);
    return this.http.post(this.springURL + "/medicare-service/user/doctor", user);
  }

  addPatient(user: patient) {
    console.log(user);
    this.addPatientUserObservable(user).subscribe(
      (data) => {
        alert('success');
        this.userExists = data;
        if (this.userExists)
          this.router.navigate(["/login"])
      }
    )
  }
  addPatientUserObservable(user: patient): Observable<any> {
    //console.log(user);
    return this.http.post(this.springURL + "/medicare-service/patient", user);
  }



  getParticularReport(id: number,doctorName:string): Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Bearer ' + this.getToken());
    console.log(headers);
    return this.http.get<Report>(this.springURL + "/medicare-service/user/genaratereport/"+id+"/"+doctorName, { headers });
  } 


////Report




  // onSubmitReportForm(report: Report): Observable<any> {
  //   let headers = new HttpHeaders();
  //   headers = headers.set('Authorization', 'Bearer ' + this.getToken());
  //   return this.http.put(this.springURL + "/user/postreport", report);
  // }

  onSubmitReportForm(report: Report) {
    
    //let newUser: Doctor= { firstname: user["firstname"], lastname: user["lastname"], id: user["id"],dob: user["dob"],gender: user["gender"],password: user["password"],number: user["password"],email: user["email"],altnumber: user["altnumber"],address1: user["address1"],address2: user["address2"],state :user["state"],city:user["city"],code:user["code"],age:user["age"],degree:user["degree"],specality:user["specality"],workhours:user["workhours"],clinicname:user["clinicname"],medicareserviceid:user["medicareserviceid"],mediList: null }
    console.log(report);
    this.onSubmitObservable(report).subscribe(
      (data) => {
        alert('success');
        alert("Report Updated")
          this.router.navigate(["/doctor"]);
      }
    )
  }
  onSubmitObservable(report: Report): Observable<any> {
    //console.log(user);
    return this.http.put(this.springURL + "/medicare-service/user/postreport", report);
  }

  onSubmitEditForm(medicare: MedicareServices ) {
    
    //let newUser: Doctor= { firstname: user["firstname"], lastname: user["lastname"], id: user["id"],dob: user["dob"],gender: user["gender"],password: user["password"],number: user["password"],email: user["email"],altnumber: user["altnumber"],address1: user["address1"],address2: user["address2"],state :user["state"],city:user["city"],code:user["code"],age:user["age"],degree:user["degree"],specality:user["specality"],workhours:user["workhours"],clinicname:user["clinicname"],medicareserviceid:user["medicareserviceid"],mediList: null }
    console.log(medicare);
    this.onSubmitEditObservable(medicare).subscribe(
      (data) => {
        alert('success');
             alert("Saved")
          this.router.navigate(["/doctor"]);
      }
    )
  }
  onSubmitEditObservable(medicare: MedicareServices): Observable<any> {
    //console.log(user);
    return this.http.put(this.springURL + "/medicare-service/medicare", medicare);
  }


/////particular patient

getParticularPatient(patientName: string): Observable<any> {
  let headers = new HttpHeaders();
  headers = headers.set('Authorization', 'Bearer ' + this.getToken());
  console.log(patientName);
  return this.http.get<patient>(this.springURL + "/medicare-service/patient/getpatient/"+patientName, { headers });
} 


getParticularDoctor(doctorName: string): Observable<any> {
  let headers = new HttpHeaders();
  headers = headers.set('Authorization', 'Bearer ' + this.getToken());
  console.log(doctorName);
  return this.http.get<patient>(this.springURL + "/medicare-service/user/doctordetailsByName/"+doctorName, { headers });
} 
}
