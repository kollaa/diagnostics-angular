import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { BasicServiceService } from 'src/app/service/basic-service.service';
@Component({
  selector: 'app-patient-signup',
  templateUrl: './patient-signup.component.html',
  styleUrls: ['./patient-signup.component.css']
})
export class PatientSignupComponent implements OnInit {

  signUpForm: FormGroup;
  uname:String;
  pass:String;
  fname:String;
  lname:String;
  cpass:String; 
  Gender: any = ['Male','Female']
  constructor(private formBuilder:FormBuilder,private basicServiceService:BasicServiceService ) { }
  ngOnInit() {
    this.signUpForm = this.formBuilder.group({
      firstname:['',[
        Validators.required
      ]],
      lastname:['',[
        Validators.required
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
      address2:  ['',[
        Validators.required
      ]],
      altnumber:  ['',[
        Validators.required,Validators.pattern('^[0-9]+$')
      ]]
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
  get address2() {
    return this.signUpForm.get('address2');
  }
  get altnumber() {
    return this.signUpForm.get('address2');
  }

  // matchConfirmPassword(formControl: FormControl): { [s: string]: boolean } {
  //   if (this.signUpForm) {
  //     if (formControl.value && formControl.value.length > 0 && formControl.value !== this.signUpForm.get('password').value) {
  //       return { 'nomatch': true };
  //     }
  //   }
  //   return null;
  // }
  isUsernameTaken(formControl: FormControl): { [s: string]: boolean } {
      if (formControl.value === 'admin') {
          return { 'userNameTaken': true };
        } else {
          return null;
        }
      }
}

