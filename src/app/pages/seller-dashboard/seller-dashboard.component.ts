import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NavigationStart, Router } from '@angular/router';
import { FailureAlertComponent } from 'src/app/forms/failure-alert/failure-alert.component';
import { SuccessAlertDialog } from 'src/app/forms/success-alert/success-alert.dialog';
import { PlatformService } from 'src/app/platform.service';




@Component({
  selector: 'app-seller-dashboard',
  templateUrl: './seller-dashboard.component.html',
  styleUrls: ['./seller-dashboard.component.scss']
})
export class SellerDashboardComponent implements OnInit {
  buyerRequests: any[] = [];
constructor(private router:Router,private dialog:MatDialog,private platService:PlatformService){
  this.router.events.subscribe((event) => {
    if (event instanceof NavigationStart) {
      console.log('Navigation started');
      console.log('Current route:', event.url);
    }
  });


 

  this.buyerRequests = [
    { buyerName: 'John Doe', details: 'Request details for John Doe' },
    { buyerName: 'Jane Doe', details: 'Request details for Jane Doe' },
    // Add more dummy data as needed
  ];
}


ngOnInit(): void {
  this.fetchBuyerRequests();
}
  logout() {
    localStorage.clear()
    const dialogRef = this.dialog.open(SuccessAlertDialog)
    setTimeout(() => {
      dialogRef.close();
    }, 2000);
    this.router.navigate(['/login/seller'])
  }

  id:any
  fetchBuyerRequests() {
    this.id = localStorage['aadhar'];
    this.id =this.id.replace(/"/g, '');
    this.platService.getBuyerRequests(this.id).subscribe(
      (data:any) => {
        console.log(data);
        this.buyerRequests = data;
        this.buyerRequests = this.buyerRequests.filter(request => request.status === 'pending');
      },
      (error) =>{

        console.error('Error fetching buyer requests:', error);
      }
    );
  }


  RejectReq(req:any) {
    req.status = 'Rejected';
    this.platService.updateRequest(req).subscribe(
      response => {
        console.log('successful', response);
        const dialogRef = this.dialog.open(SuccessAlertDialog)
          setTimeout(() => {
            dialogRef.close();
          }, 2000);
        
        this.router.navigate(['seller-dashboard'])
      },
      error => {

        console.error('Login failed', error);
        const dialogRef = this.dialog.open(FailureAlertComponent)
            setTimeout(() => {
              dialogRef.close();
        }, 2000);
        // Handle login error (e.g., display an error message)
      }
    );
    
  }
  ApproveReq(req:any) {
    req.status = 'Approved';
    console.log(req);
    this.platService.updateRequest(req).subscribe(
      response => {
        console.log('successful', response);
        const dialogRef = this.dialog.open(SuccessAlertDialog)
          setTimeout(() => {
            dialogRef.close();
          }, 2000);
        
        this.router.navigate(['seller-dashboard'])
      },
      error => {
        console.error('Login failed', error);
        const dialogRef = this.dialog.open(FailureAlertComponent)
            setTimeout(() => {
              dialogRef.close();
        }, 2000);
        console.error('Login failed', error);
        // Handle login error (e.g., display an error message)
      }
    );
  }
  

}
