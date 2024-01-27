import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ChoicesComponent } from './components/choices/choices.component';
import { PlatformLoginDialog } from './forms/platform-login/platform-login.dialog';
import { PlatformUserRegisisterDialog } from './forms/platform-user-regisister/platform-user-regisister.dialog';
import { SellerDashboardComponent } from './pages/seller-dashboard/seller-dashboard.component';
import { BuyerDashboardComponent } from './pages/buyer-dashboard/buyer-dashboard.component';
import { RegisterLandAssetDialog } from './forms/register-land-asset/register-land-asset.dialog';
import { GetBuyerReqsComponent } from './components/get-buyer-reqs/get-buyer-reqs.component';
import { ViewSellerLandsComponent } from './components/view-seller-lands/view-seller-lands.component';
import { TransferFormComponent } from './forms/transfer-form/transfer-form.component';

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
    component:SellerDashboardComponent,
    canActivate: []
  },
  {
    path:'buyer-dashboard',
    component:BuyerDashboardComponent
  },
  {
    path:'register-land-asset',
    component:RegisterLandAssetDialog
  },
  {
    path:'get-buyer-requests',
    component:GetBuyerReqsComponent
  },
  {
    path:'view-seller-lands',
    component:ViewSellerLandsComponent
  },
  {
    path:'transfer-land',
    component:TransferFormComponent
  }
  // Add other routes as needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
