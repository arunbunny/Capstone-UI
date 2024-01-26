import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PlatformService } from 'src/app/platform.service';


@Component({
  selector: 'app-platform-login',
  templateUrl: './platform-login.dialog.html',
  styleUrls: ['./platform-login.dialog.scss']
})
export class PlatformLoginDialog {

  loginType: string | null | undefined = '';


  constructor(private route: ActivatedRoute,private fb: FormBuilder,private router: Router,private platService:PlatformService) {
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

  

  onSubmit() {
    if (this.loginForm.valid) {
      const credentials = this.loginForm.value;
      console.log(credentials)
      this.platService.login(credentials).subscribe(
        response => {
          console.log('Login successful', response);
          if(this.loginType == 'seller'){
            this.router.navigate(['/seller-dashboard'])
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
