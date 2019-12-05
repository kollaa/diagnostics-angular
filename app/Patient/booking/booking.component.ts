import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { PatientServiceService } from 'src/app/service/patient-service.service';
import { Doctor } from 'src/app/Bean/Doctor';
import { BasicServiceService } from 'src/app/service/basic-service.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
doctor : Doctor;
patientName : string;
  constructor(private router:Router,private route: ActivatedRoute, private patientServiceService:PatientServiceService, private basicServiceService : BasicServiceService) { }

  ngOnInit() {

    const id = this.route.snapshot.paramMap.get('id');
    this.patientServiceService.getDoctorById(+id).subscribe(
      (data) =>{
          this.doctor=data;
          console.log(this.doctor);
      }
    )

  }


  Booking(doctorName : string){
  this.patientName=this.basicServiceService.getUserName();
  console.log(this.patientName);
  this.patientServiceService.getDoctorByID(this.patientName,doctorName).subscribe(
    data => {
      alert('DONE');
      this.router.navigate(['patient']);
    }
  )
  }

  // Book(doctorId:number){
  //   this.patientId=this.basicServiceService.getUserId();
  //   this.patientServiceService.bookAppopintment(this.patientId,doctorId).subscribe(
  //     (data) =>{
  //          console.log("DONE");
  //     }
  //   )


  //}

}
