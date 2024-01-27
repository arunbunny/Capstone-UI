import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ChoicesComponent } from './components/choices/choices.component';
import { PlatformLoginDialog } from './forms/platform-login/platform-login.dialog';
import { PlatformComponent } from './pages/platform/platform.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { ReactiveFormsModule } from '@angular/forms';
import { PlatformUserRegisisterDialog } from './forms/platform-user-regisister/platform-user-regisister.dialog';
import { SellerDashboardComponent } from './pages/seller-dashboard/seller-dashboard.component';
import { TransferFormComponent } from './forms/transfer-form/transfer-form.component';
import { BuyerDashboardComponent } from './pages/buyer-dashboard/buyer-dashboard.component';
import { SuccessAlertDialog } from './forms/success-alert/success-alert.dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterLandAssetDialog } from './forms/register-land-asset/register-land-asset.dialog';
import { CommonModule } from '@angular/common';

import {GetBuyerReqsComponent} from './components/get-buyer-reqs/get-buyer-reqs.component';
import { ViewSellerLandsComponent } from './components/view-seller-lands/view-seller-lands.component';
import { FailureAlertComponent } from './forms/failure-alert/failure-alert.component';



@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    DashboardComponent,
    ChoicesComponent,
    PlatformLoginDialog,
    PlatformComponent,
    PlatformUserRegisisterDialog,
    SellerDashboardComponent,
    TransferFormComponent,
    BuyerDashboardComponent,
    SuccessAlertDialog,
    RegisterLandAssetDialog,
    GetBuyerReqsComponent,
    ViewSellerLandsComponent,
    FailureAlertComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDialogModule,
    RouterModule,
   
  ],
  exports:[
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
