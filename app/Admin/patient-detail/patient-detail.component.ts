import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BasicServiceService } from 'src/app/service/basic-service.service';
import { patient } from 'src/app/Bean/Patient';

@Component({
  selector: 'app-patient-detail',
  templateUrl: './patient-detail.component.html',
  styleUrls: ['./patient-detail.component.css']
})
export class PatientDetailComponent implements OnInit {
patient:patient;
  constructor(private route: ActivatedRoute,private basicServiceService:BasicServiceService) { }

  ngOnInit() {
    const name = this.route.snapshot.paramMap.get('name');
    this.basicServiceService.getParticularPatient(name).subscribe(
      (data)=>{
        this.patient=data;
      }
    )
  }

}
