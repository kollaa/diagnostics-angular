import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BasicServiceService } from 'src/app/service/basic-service.service';
import { Doctor } from 'src/app/Bean/Doctor';

@Component({
  selector: 'app-doctor-detail',
  templateUrl: './doctor-detail.component.html',
  styleUrls: ['./doctor-detail.component.css']
})
export class DoctorDetailComponent implements OnInit {
doctor:Doctor;
  constructor(private route: ActivatedRoute,private basicServiceService:BasicServiceService) { }

  ngOnInit() {
    const name = this.route.snapshot.paramMap.get('name');
    //console.log(id);
    this.basicServiceService.getParticularDoctor(name).subscribe(
      (data)=>{
        this.doctor=data;
        //console.log(this.doctor);
      }
    )
  }

}
