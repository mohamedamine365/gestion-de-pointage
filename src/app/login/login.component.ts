import { Component } from '@angular/core';
import { FormBuilder,FormGroup,Validators,FormControl,ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm: FormGroup;

  constructor( private fb: FormBuilder, private _auth: AuthService, private _router: Router ){

    let controls = {
      email : new FormControl('', [ Validators.required, Validators.email ]),
      password: new FormControl('', [ Validators.required ])
    }

    this.loginForm = this.fb.group(controls);

  }

  send(){
   
    this._auth.login( this.loginForm.value ).subscribe({
      next: (res: any)=>{
        
        // tsajel token f browser
        localStorage.setItem( 'token', res.myToken )
        // redirect 
        this._router.navigate(['/liste']);

      },
      error: (err)=>{
        console.log(err);      
      }
    })
    
  }
}
