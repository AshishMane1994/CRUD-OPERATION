import { NgModule } from '@angular/core';
import { ChildActivationEnd, RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
import { SignInFormComponent } from './sign-in-form/sign-in-form.component';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { StudentLoginComponent } from './student-login/student-login.component';


const routes: Routes = [
  // { path: '', redirectTo: '/demo', pathMatch: 'full' },

  { path: 'demo', component: DemoComponent,
  children: [
    { path:'',
    redirectTo: 'demo',
    pathMatch: 'full' },
    {path:"student-login", component:StudentLoginComponent },
    {path:"student-dashboard", component:StudentDashboardComponent },

    ]
 },





  { path: 'delete/:id', component: EmployeeDashboardComponent },
  { path: 'employee', component: EmployeeDashboardComponent },
  { path: 'sign', component: SignInFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }