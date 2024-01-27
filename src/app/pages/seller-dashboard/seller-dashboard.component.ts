import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NavigationStart, Router } from '@angular/router';
import { SuccessAlertDialog } from 'src/app/forms/success-alert/success-alert.dialog';
import { PlatformService } from 'src/app/platform.service';




@Component({
  selector: 'app-seller-dashboard',
  templateUrl: './seller-dashboard.component.html',
  styleUrls: ['./seller-dashboard.component.scss']
})
export class SellerDashboardComponent {
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
  logout() {
    const dialogRef = this.dialog.open(SuccessAlertDialog)
    setTimeout(() => {
      dialogRef.close();
    }, 2000);
    this.router.navigate(['/login/seller'])
  }


  fetchBuyerRequests() {
    this.platService.getBuyerRequests().subscribe(
      (data:any) => {
        console.log(data);
        this.buyerRequests = data;
      },
      (error) => {
        console.error('Error fetching buyer requests:', error);
      }
    );
  }
  

}
