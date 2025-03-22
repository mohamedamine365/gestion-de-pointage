import { Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ConsultationComponent } from './consultation-des-acces/consultation.component';
import { ParametrageDesAccesComponent } from './parametrage-des-acces/parametrage-des-acces.component';
import { TBDRepartitionDesAccesComponent } from './tbd-repartition-des-acces/tbd-repartition-des-acces.component';
import { guardGuard} from './services/guard.guard';

export const routes: Routes = [
    {path:"",redirectTo:"Consultation-des-acces",pathMatch:"full"},
    {path:"register",component:RegisterComponent},
    {path:"login",component:LoginComponent},
    {path:"Consultation-des-acces",canActivate:[guardGuard],component:ConsultationComponent},
    {path:"parametrage-des-acces",component:ParametrageDesAccesComponent},
    {path:"tbd-repartition-des-acces",component:TBDRepartitionDesAccesComponent}
];
