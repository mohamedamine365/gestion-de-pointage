import { Component } from '@angular/core';

import { AthService } from '../services/ath.service';

import { ShiredService } from '../services/shired.service';


@Component({
  selector: 'app-consultation-des-acees',
  standalone: true,
  imports: [],
  templateUrl: './consultation-des-acees.component.html',
  styleUrl: './consultation-des-acees.component.css'
})
export class ConsultationDesAceesComponent {
user:any;

list: any = [];
constructor(private auth:AthService,private shired:ShiredService){}
ngOnInit(): void {
  this.shired.liste().subscribe({
    next: (res)=>{
      this.list= res;
      
    },
    error: (err)=>{
      console.log(err);
    }
  })
  
  this.user = this.auth.getUserDataFromToken();
}
}



