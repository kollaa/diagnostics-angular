import { Injectable } from '@angular/core';
import { Doctor } from '../Bean/Doctor';
import { Subject, Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BasicServiceService } from './basic-service.service';
import { MedicareServices } from '../Bean/MedicalService';
import { patient } from '../Bean/Patient';
import { Report } from '../Bean/Report';

@Injectable({
  providedIn: 'root'
})
export class PatientServiceService {
  private subject = new Subject<Doctor[]>();
  springURL: string = environment.baseUrl;


  constructor(private http: HttpClient, private basicService : BasicServiceService) { }

  getSubject(): Subject<Doctor[]> {
    return this.subject;
  }


  getDoctorDetails(): Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Bearer ' + this.basicService.getToken());
    return this.http.get<Doctor[]>(this.springURL + "/medicare-service/user/doctordetails", { headers });
  }

  getDoctorById(id: number): Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Bearer ' + this.basicService.getToken());
    console.log(headers);
    return this.http.get<Doctor>(this.springURL + "/medicare-service/user/doctordetailsById/" + id, { headers });
  } 

  bookAppopintmentDoctor(patientId : number, doctorId:number): Observable<any> {
    console.log(patientId+" "+doctorId);
     let headers = new HttpHeaders();
     headers = headers.set('Authorization', 'Bearer ' +this.basicService.getToken());
     console.log(headers);

     return this.http.post<any>(this.springURL+"/medicare-service/booking/"+patientId+"/"+doctorId,{headers});

  }
  getDoctorByID(patientName: string,doctorName:string) {
    //console.log(id+ " "+ did);
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Bearer ' + this.basicService.getToken());
    console.log(headers);
    return this.http.post(this.springURL+"/medicare-service/booking/"+patientName+"/"+doctorName,null, { headers });
  }



  // bookAppopintment(patientId : number,doctorId:number): Observable<any> {
  //   let headers = new HttpHeaders();
  //   headers = headers.set('Authorization', 'Bearer ' + this.basicService.getToken());
  //   console.log(headers);
  //   return this.http.post(this.springURL + "/booking/" + patientId+"/"+doctorId, { headers });
  // } 




  ////medicare edit

  getMediCareDetails(doctorId:number) {
    //console.log(id+ " "+ did);
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Bearer ' + this.basicService.getToken());
    console.log(headers);
    return this.http.get<MedicareServices>(this.springURL+"/medicare-service/medicare/"+doctorId, { headers });
  }
////View Report


getPatientReports(patientName:string): Observable<Report[]>{
  //console.log(id+ " "+ did);
  console.log(patientName)
  let headers = new HttpHeaders();
  headers = headers.set('Authorization', 'Bearer ' + this.basicService.getToken());
  console.log(headers);
  return this.http.get<Report[]>(this.springURL+"/medicare-service/patient/viewreport/"+patientName, { headers });
}

}
