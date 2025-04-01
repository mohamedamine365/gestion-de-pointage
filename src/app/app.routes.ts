import { Routes } from '@angular/router';
import { RepartionDesAccesComponent } from './repartion-des-acces/repartion-des-acces.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ConsultationDesAceesComponent } from './consultation-des-acees/consultation-des-acees.component';
import { ParametrageDesAccesComponent } from './parametrage-des-acces/parametrage-des-acces.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { authGuard } from './services/auth.guard';


export const routes: Routes = [
    { path: "", redirectTo: "Consultation-des-acces", pathMatch: "full" },
    { 
        path: "Consultation-des-acces", 
        canActivate: [authGuard], 
        component: ConsultationDesAceesComponent
    },
    { 
        path: "parametrage-des-acces", 
        canActivate: [authGuard], 
        component: ParametrageDesAccesComponent 
    },
    { path: "repartition-des-acces",canActivate:[authGuard],component: RepartionDesAccesComponent },
    { path: "register", component: RegisterComponent },
    { path: "login", component: LoginComponent },
    { path: "**", component: NotFoundComponent }
];