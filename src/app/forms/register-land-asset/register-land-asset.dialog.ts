import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { PlatformService } from 'src/app/platform.service';
import { SuccessAlertDialog } from '../success-alert/success-alert.dialog';

@Component({
  selector: 'app-register-land-asset',
  templateUrl: './register-land-asset.dialog.html',
  styleUrls: ['./register-land-asset.dialog.scss']
})
export class RegisterLandAssetDialog {
  loadedData: string='';
  constructor(private fb: FormBuilder,private route:ActivatedRoute,private platService: PlatformService,private router:Router,private dialog:MatDialog){
    this.loadData();
    this.registerForm.patchValue({ownerid:this.loadedData})
  }
  registerForm = this.fb.group({
    ownerid:[this.loadedData,[Validators.required]],
    area:['',[Validators.required]],
    price:['',[Validators.required]],
    location:['',[Validators.required]],
    address:['',[Validators.required]],
  })

  onSubmit() {
    if (this.registerForm.valid) {
      const registerDetails = this.registerForm.value;
      this.platService.registerLand(registerDetails).subscribe(
        response => {
          const dialogRef = this.dialog.open(SuccessAlertDialog)
          setTimeout(() => {
            dialogRef.close();
          }, 2000);
          console.log('Registration successful', response);
          // console.log(this.userType)
          this.router.navigate(['/seller-dashboard'])
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

  loadData(): void {
    this.loadedData = localStorage['aadhar'];
    this.loadedData =this.loadedData.replace(/"/g, '');
    console.log(this.loadedData)
  }
  
}
