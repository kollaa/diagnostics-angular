import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { BasicServiceService } from 'src/app/service/basic-service.service';

@Component({
  selector: 'app-doctor-signup',
  templateUrl: './doctor-signup.component.html',
  styleUrls: ['./doctor-signup.component.css']
})
export class DoctorSignupComponent implements OnInit {
  signUpForm: FormGroup;
  uname:String;
  pass:String;
  fname:String;
  lname:String;
  cpass:String; 
  Gender: any = ['Male','Female']
  medicareservice: any=['1','2','3','4','5']
  constructor(private formBuilder:FormBuilder,private basicServiceService:BasicServiceService) { }
  ngOnInit() {
    this.signUpForm = this.formBuilder.group({
      firstname:['',[
        Validators.required,Validators.minLength(3)
      ]],
      lastname:['',[
        Validators.required,Validators.minLength(3)
      ]],
      password:['',[
        Validators.required
      ]],
      id: ['',[
        Validators.required
      ]],
      age: ['',[
        Validators.required,Validators.pattern('^[0-9]+$')
      ]],
      dob: ['',[
        Validators.required
      ]],
      number: ['',[
        Validators.required,Validators.pattern('^[0-9]+$')
      ]],
      gender: ['',[
        Validators.required
      ]],
      email: ['',[
        Validators.required
      ]],
      address1:  ['',[
        Validators.required
      ]],
      
      state:  ['',[
        Validators.required
      ]],
      
      city:  ['',[
        Validators.required
      ]],
      
      code:  ['',[
        Validators.required
      ]],
      clinicname:  ['',[
        Validators.required
      ]],
      specality:  ['',[
        Validators.required
      ]],
      workhours:  ['',[
        Validators.required
      ]],
      medicareserviceid:  ['',[
        Validators.required
      ]],
       degree:  ['',[
        Validators.required
      ]],
      address2:  ['',[
        Validators.required
      ]],
      altnumber:  ['',[
        Validators.required,Validators.pattern('^[0-9]+$')
      ]],
    })
  }  
  get firstname() {
    return this.signUpForm.get('firstname');
  }
  get lastname() {
    return this.signUpForm.get('lastname');
  }
  get password() {
    return this.signUpForm.get('password');
  }
  get id() {
    return this.signUpForm.get('id');
  }
  get age() {
    return this.signUpForm.get('age');
  }
  get dob() {
    return this.signUpForm.get('dob');
  }
  get number() {
    return this.signUpForm.get('number');
  }
  get gender() {
    return this.signUpForm.get('gender');
  }
  get email() {
    return this.signUpForm.get('email');
  }
  get address1() {
    return this.signUpForm.get('address1');
  }
  get state() {
    return this.signUpForm.get('state');
  }
  get city() {
    return this.signUpForm.get('city');
  }
  get code() {
    return this.signUpForm.get('code');
  }
  get clinicname() {
    return this.signUpForm.get('clinicname');
  }
  get specality() {
    return this.signUpForm.get('specality');
  }
  get workhours() {
    return this.signUpForm.get('workhours');
  }
  get medicareserviceid() {
    return this.signUpForm.get('medicareserviceid');
  }
  get degree() {
    return this.signUpForm.get('degree');
  }
  
  get address2() {
    return this.signUpForm.get('address2');
  }
  get altnumber() {
    return this.signUpForm.get('address2');
  }

  isUsernameTaken(formControl: FormControl): { [s: string]: boolean } {
      if (formControl.value === 'doctor') {
          return { 'userNameTaken': true };
        } else {
          return null;
        }
      }

}
