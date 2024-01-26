import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PlatformService } from 'src/app/platform.service';

@Component({
  selector: 'app-platform-user-regisister',
  templateUrl: './platform-user-regisister.dialog.html',
  styleUrls: ['./platform-user-regisister.dialog.scss']
})
export class PlatformUserRegisisterDialog {

  userType: string | null | undefined = '';
  registerForm = this.fb.group({
    name :['',[Validators.required]],
    type: this.userType,
    email:['',[Validators.required]],
    aadhar:['',[Validators.required]],
    password:['',[Validators.required]],
    address:['',[Validators.required]],
  })
  constructor(private fb: FormBuilder,private route:ActivatedRoute,private platService: PlatformService,private router:Router){}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.userType = params.get('userType');
      this.registerForm.patchValue({ type: this.userType });
    });
  }


  onSubmit() {
    if (this.registerForm.valid) {
      const registerDetails = this.registerForm.value;
      this.platService.register(registerDetails).subscribe(
        response => {
          console.log('Registration successful', response);
          console.log(this.userType)
          this.router.navigate(['/login',this.userType])
          // Handle successful login (e.g., navigate to another page)
        },
        error => {
          console.error('Registration failed', error);
          // Handle login error (e.g., display an error message)
        }
      );
    } else {
      console.log('Form is invalid');
    }
  }
  
  
}
