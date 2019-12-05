import { Component, OnInit } from '@angular/core';
import { ApprovalService } from 'src/app/service/approval.service';
import { User } from 'src/app/Bean/User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doctoraccept',
  templateUrl: './doctoraccept.component.html',
  styleUrls: ['./doctoraccept.component.css']
})
export class DoctoracceptComponent implements OnInit {
  user : User[];
  size:number;
  constructor(private approvalService : ApprovalService,private router:Router) { }

  ngOnInit() {
    this.getData();
    
  }

  onApprove(user : User){
   
      this.approvalService.OnApp(user).subscribe(
        (data) =>{
          alert('successfully accepted');
          this.router.navigate(['login']);
          this.getData();

        }
      );
      
    
  }
  
  docDetails(doctorName:string){
    this.router.navigate(['doctordetail',doctorName])
  }

  onReject(id:number){
  
      this.approvalService.onReject(id).subscribe(
        (data) => {
          alert('successfully rejected');
          this.router.navigate(['login']);
          this.getData();
        }
      )
    

  }


  getData() {
    this.approvalService.getUnapprovedDoctors().subscribe(
      (data: User[]) => {
        this.user = data;
        this.size=this.user.length;
      }
    )
  }

}
