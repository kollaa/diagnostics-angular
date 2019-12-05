import { Component, OnInit } from '@angular/core';
import { ApprovalService } from 'src/app/service/approval.service';
import { User } from 'src/app/Bean/User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patientaccept',
  templateUrl: './patientaccept.component.html',
  styleUrls: ['./patientaccept.component.css']
})
export class PatientacceptComponent implements OnInit {
  user : User[];
  size:number;
  constructor(private approvalService : ApprovalService,private router :Router) { }

  ngOnInit() {
    this.getData();
    
  }

  onApprove(user : User){
   
      this.approvalService.OnAppPatient(user).subscribe(
        (data) =>{
          alert('successfully accepted');
          this.getData();
        }
      );
      
    
  }
  

  onReject(id:number){
  
      this.approvalService.onRejectPatient(id).subscribe(
        (data) => {
          alert('successfully rejected');
          this.getData();
        }
      )
    

  }
  patDetails(patientName:string){
    this.router.navigate(['patientdetail',patientName])
  }

  getData() {
    this.approvalService.getUnapprovedPatient().subscribe(
      (data: User[]) => {
        this.user = data;
        console.log(data);
        this.size=this.user.length;
      }
    )
  }

}
