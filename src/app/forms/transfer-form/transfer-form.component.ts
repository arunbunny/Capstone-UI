import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PlatformService } from 'src/app/platform.service';
import { FailureAlertComponent } from '../failure-alert/failure-alert.component';
import { MatDialog } from '@angular/material/dialog';
import { SuccessAlertDialog } from '../success-alert/success-alert.dialog';

@Component({
  selector: 'app-transfer-form',
  templateUrl: './transfer-form.component.html',
  styleUrls: ['./transfer-form.component.scss']
})
export class TransferFormComponent {
  id:any
  registerForm = this.fb.group({
    landid: ['', [Validators.required]],
    buyerid: ['', [Validators.required]],
    ownerid: ['', ],
    requireloan: ['NO'],
  });
  constructor(private fb: FormBuilder,private route:ActivatedRoute,private platService: PlatformService,private router:Router,private dialog:MatDialog){}

  ngOnInit() {
    this.id = localStorage['aadhar'];
    this.id =this.id.replace(/"/g, '');
    console.log(this.id)
    this.registerForm.patchValue({ownerid:this.id})
  }


  onSubmit() {
    if (this.registerForm.valid) {
      const registerDetails = this.registerForm.value;
      this.platService.raiseLandRequest(registerDetails).subscribe(
        response => {
          console.log('Transfer Successful', response);
          const dialogRef = this.dialog.open(SuccessAlertDialog)
            setTimeout(() => {
              dialogRef.close();
        }, 2000);
          this.router.navigate(['/seller-dashboard'])
          // Handle successful login (e.g., navigate to another page)
        },
        error => {
          console.error('Registration failed', error);
          const dialogRef = this.dialog.open(FailureAlertComponent)
            setTimeout(() => {
              dialogRef.close();
        }, 2000);
          // Handle login error (e.g., display an error message)
        }
      );
    } else {
      console.log('Form is invalid');
    }
  }
  
}
