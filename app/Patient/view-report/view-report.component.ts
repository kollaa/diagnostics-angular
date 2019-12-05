import { Component, OnInit } from '@angular/core';
import { BasicServiceService } from 'src/app/service/basic-service.service';
import { PatientServiceService } from 'src/app/service/patient-service.service';
import { Report } from 'src/app/Bean/Report';

@Component({
  selector: 'app-view-report',
  templateUrl: './view-report.component.html',
  styleUrls: ['./view-report.component.css']
})
export class ViewReportComponent implements OnInit {
report : Report[];
  constructor(private basicServiceService : BasicServiceService,private patientServiceService:PatientServiceService) { }

  ngOnInit() {
    const patientName = this.basicServiceService.getUserName();
    this.patientServiceService.getPatientReports(patientName).subscribe(
      (data) =>{
          this.report=data;
          console.log(this.report);
      }
    )

  }

}
