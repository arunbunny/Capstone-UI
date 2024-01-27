import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PlatformService } from 'src/app/platform.service';
import { MatDialog } from '@angular/material/dialog';
import { SuccessAlertDialog } from '../success-alert/success-alert.dialog';


@Component({
  selector: 'app-platform-login',
  templateUrl: './platform-login.dialog.html',
  styleUrls: ['./platform-login.dialog.scss']
})
export class PlatformLoginDialog {

  loginType: string | null | undefined = '';


  constructor(private route: ActivatedRoute,private fb: FormBuilder,private router: Router,private platService:PlatformService,private dialog:MatDialog) {
  }


  loginForm =  this.fb.group({
    aadhar: ['', Validators.required],
    password: ['', Validators.required],
    type: this.loginType
  })

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.loginType = params.get('loginType');
      this.loginForm.patchValue({ type: this.loginType });
    });
  }

  set(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const credentials = this.loginForm.value;
      console.log(credentials)
      // Set data to local storage
      this.set("aadhar",credentials.aadhar)
      this.platService.login(credentials).subscribe(
        response => {
          console.log('Login successful', response);
          const dialogRef = this.dialog.open(SuccessAlertDialog)
            setTimeout(() => {
              dialogRef.close();
            }, 2000);
          if(this.loginType == 'seller'){
            this.router.navigate(['/seller-dashboard'])
          }else if(this.loginType == 'buyer'){
            this.router.navigate(['/buyer-dashboard'])
          }
          
        },
        error => {
          console.error('Login failed', error);
          // Handle login error (e.g., display an error message)
        }
      );
    } else {
      console.log('Form is invalid');
    }
  }

  navigateRegister(userType:any) {
    this.router.navigate(['/register',userType]);
  }
}
