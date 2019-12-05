import { Component, OnInit, ɵConsole } from '@angular/core';
import { Doctor } from 'src/app/Bean/Doctor';
import { PatientServiceService } from 'src/app/service/patient-service.service';

@Component({
  selector: 'app-patient-home',
  templateUrl: './patient-home.component.html',
  styleUrls: ['./patient-home.component.css']
})
export class PatientHomeComponent implements OnInit {
doctorList : Doctor[];
filtereddoctorList : Doctor[];
searchKey: string;

  constructor(private patientService:PatientServiceService) { }

  ngOnInit() {
     this.patientService.getDoctorDetails().subscribe(
   data => {
     ;
     this.doctorList= data;
    
     this.filtereddoctorList = this.doctorList;
     console.log(this.filtereddoctorList);
   }
);

  }
search(){
  this.filtereddoctorList= this.doctorList.filter(item => item.medicareService.medicareservice.toLocaleLowerCase().includes(this.searchKey.toLocaleLowerCase()));
  this.patientService.getSubject().next(this.filtereddoctorList);
}

}
