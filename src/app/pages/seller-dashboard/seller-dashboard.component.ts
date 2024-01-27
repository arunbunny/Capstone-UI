import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NavigationStart, Router } from '@angular/router';
import { SuccessAlertDialog } from 'src/app/forms/success-alert/success-alert.dialog';




@Component({
  selector: 'app-seller-dashboard',
  templateUrl: './seller-dashboard.component.html',
  styleUrls: ['./seller-dashboard.component.scss']
})
export class SellerDashboardComponent {

constructor(private router:Router,private dialog:MatDialog){
  this.router.events.subscribe((event) => {
    if (event instanceof NavigationStart) {
      console.log('Navigation started');
      console.log('Current route:', event.url);
    }
  });
}
  logout() {
    const dialogRef = this.dialog.open(SuccessAlertDialog)
    setTimeout(() => {
      dialogRef.close();
    }, 2000);
    this.router.navigate(['/login/seller'])
  }
  

}
