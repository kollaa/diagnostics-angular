import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {  
  constructor(private authService : AuthService, private router : Router){ }
  ngOnInit(){
this.router.navigate(['home']);
  }
onSubmit(){
  this.router.navigate(['editmedi']);
}

onSubmitReport(){
  this.router.navigate(['viewreport']);
}
  }

