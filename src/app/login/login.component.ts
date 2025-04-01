import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import {ReactiveFormsModule, FormBuilder,FormGroup,FormControl} from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AthService } from '../services/ath.service';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor( private fb: FormBuilder, private auth: AthService, private router: Router ){

    let controls = {
      email : new FormControl('', [ Validators.required, Validators.email ]),
      password: new FormControl('', [ Validators.required ])
    }

    this.loginForm = this.fb.group(controls);

  }

  send(){
   
    this.auth.login( this.loginForm.value ).subscribe({
      next: (res: any)=>{
        
        // tsajel token f browser
        localStorage.setItem( 'token', res.myToken )
        // redirect 
        this.router.navigate(['/Consultation-des-acces']);

      },
      error: (err)=>{
        console.log(err);      
      }
    })
    
  }
}
