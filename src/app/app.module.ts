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

import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { PlatformUserRegisisterDialog } from './forms/platform-user-regisister/platform-user-regisister.dialog';
import { SellerDashboardComponent } from './pages/seller-dashboard/seller-dashboard.component';


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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule
  ],
  exports:[
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
