import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ChoicesComponent } from './components/choices/choices.component';
import { PlatformLoginDialog } from './forms/platform-login/platform-login.dialog';
import { PlatformUserRegisisterDialog } from './forms/platform-user-regisister/platform-user-regisister.dialog';
import { SellerDashboardComponent } from './pages/seller-dashboard/seller-dashboard.component';

const routes: Routes = [
  {  
    path: '',
    pathMatch: 'full',
    component: WelcomeComponent 
  },
  {  
    path: 'welcome',
    component: WelcomeComponent 
  },

  {
    path:'dashboard',
    component:DashboardComponent
  },
  { 
    path: 'choices', 
    component: ChoicesComponent 
  }, 
  { 
    path: 'login/:loginType', 
    component: PlatformLoginDialog 
  },
  {
    path:'register/:userType',
    component:PlatformUserRegisisterDialog
  },
  {
    path:'seller-dashboard',
    component:SellerDashboardComponent
  },

  // Add other routes as needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
