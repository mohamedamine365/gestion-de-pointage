import { Component } from '@angular/core';
import { ShiredService } from '../services/shired.service';


@Component({
  selector: 'app-Consultation-des-acces',
  standalone: true,
  imports: [],
  templateUrl: './consultation.component.html',
  styleUrl: './consultation.component.css'
})
export class ConsultationComponent {
  Data: any = [];
  constructor(private shired:ShiredService){}
  ngOnInit():void{
this.shired.liste().subscribe({
  next:(data)=>{
    this.Data=data
  },
  error:(err)=>{
    console.log("err")
  }
})
  }
}
