import { Component, OnInit } from '@angular/core';
import { BasicServiceService } from 'src/app/service/basic-service.service';
import { PatientServiceService } from 'src/app/service/patient-service.service';
import { Router } from '@angular/router';
import { MedicareServices } from 'src/app/Bean/MedicalService';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';


@Component({
  selector: 'app-edit-medicare',
  templateUrl: './edit-medicare.component.html',
  styleUrls: ['./edit-medicare.component.css']
})
export class EditMedicareComponent implements OnInit {
doctorId:number;
medicare:MedicareServices;
editForm: FormGroup;



  constructor(private router:Router, private basicServiceService:BasicServiceService,private patientServiceService:PatientServiceService,private fb: FormBuilder) { }

  ngOnInit() {
   this.doctorId=this.basicServiceService.getUserId();
        this.patientServiceService.getMediCareDetails(this.doctorId).subscribe(
(data)=>{

  this.medicare=data;
  console.log(this.medicare);
  //this.router.navigate(['doctor']);

  this.editForm =this.fb.group({

    id: [this.medicare.id, [
      Validators.required,
    ]],
    
    medicareservice: [this.medicare.medicareservice, [
      Validators.required,
    ]],
    
    servicedesc: [this.medicare.servicedesc, [
      Validators.required,
    ]],
    
    amount: [this.medicare.amount, [
      Validators.required,
    ]],
  })

  this.editForm = new FormGroup({
      
    'id':new FormControl(this.medicare.id),
    'medicareservice':new FormControl(this.medicare.medicareservice),
    'servicedesc':new FormControl(this.medicare.servicedesc),
    'amount':new FormControl(this.medicare.amount)
  })
    
}



        )
  }

  get id() {
    return this.editForm.get('id');
  }
  get medicareservice() {
    return this.editForm.get('medicareservice');
  }
  get servicedesc() {
    return this.editForm.get('servicedesc');
  }
  get amount() {
    return this.editForm.get('amount');
  }
  

}
