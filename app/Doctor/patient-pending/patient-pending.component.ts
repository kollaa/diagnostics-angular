import { Component, OnInit } from '@angular/core';
import { ApprovalService } from 'src/app/service/approval.service';
import { User } from 'src/app/Bean/User';
import { patient } from 'src/app/Bean/Patient';
import { BasicServiceService } from 'src/app/service/basic-service.service';
import { Booking } from 'src/app/Bean/Booking';

@Component({
  selector: 'app-patient-pending',
  templateUrl: './patient-pending.component.html',
  styleUrls: ['./patient-pending.component.css']
})
export class PatientPendingComponent implements OnInit {

  booking : patient[];
  size:number;
  doctorName:string;
  constructor(private approvalService : ApprovalService,private basicServiceService:BasicServiceService) { }

  ngOnInit() {
    this.getData();
  
    
  }

  onApprove(booking : patient){
    console.log(booking);
    this.doctorName=this.basicServiceService.getUserName();

      this.approvalService.OnAppPatientByDoctor(booking,this.doctorName).subscribe(
        (data) =>{
          this.doctorName=this.basicServiceService.getUserName();
          this.approvalService.getUnapprovedPatientByDoctor(this.doctorName).subscribe(
            (data) => {
              console.log(data);
              this.booking = data;
                     
            }
          )
        }
      );
      
    
  }
  

  onReject(id:number){
    this.doctorName=this.basicServiceService.getUserName();
      this.approvalService.onRejectPatientByDoctor(id,this.doctorName).subscribe(
        (data) => {
          this.getData();
        }
      )
    

  }


  getData() {
   this.doctorName=this.basicServiceService.getUserName();
    this.approvalService.getUnapprovedPatientByDoctor(this.doctorName).subscribe(
      (data) => {
        console.log(data);
        this.booking = data;
        
               
      }
    )
  }

}

