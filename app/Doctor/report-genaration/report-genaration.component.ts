import { Component, OnInit } from '@angular/core';
import { ApprovalService } from 'src/app/service/approval.service';
import { BasicServiceService } from 'src/app/service/basic-service.service';
import { patient } from 'src/app/Bean/Patient';
import { Routes } from '@angular/router';

@Component({
  selector: 'app-report-genaration',
  templateUrl: './report-genaration.component.html',
  styleUrls: ['./report-genaration.component.css']
})
export class ReportGenarationComponent implements OnInit {
  doctorName:string;
  booking : patient[];
    

  constructor(private approvalService : ApprovalService,private basicServiceService:BasicServiceService) { }

  ngOnInit() {

    this.getData();
}

getData() {
  this.doctorName=this.basicServiceService.getUserName();
   console.log(this.doctorName);
   this.approvalService.getApprovedPatientByDoctor(this.doctorName).subscribe(
     (data) => {
       console.log(data);
       this.booking = data;
       //console.log(this.booking[0].listone.);
              
     }
   )
 }
}