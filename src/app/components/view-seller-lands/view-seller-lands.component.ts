import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SuccessAlertDialog } from 'src/app/forms/success-alert/success-alert.dialog';
import { PlatformService } from 'src/app/platform.service';

@Component({
  selector: 'app-view-seller-lands',
  templateUrl: './view-seller-lands.component.html',
  styleUrls: ['./view-seller-lands.component.scss']
})
export class ViewSellerLandsComponent {
  myRequests: any[] = [];
  constructor(private platService:PlatformService,private dialog:MatDialog){
    this.myRequests = [
      { buyerName: 'John Doe', details: 'Request details for John Doe' },
      { buyerName: 'Jane Doe', details: 'Request details for Jane Doe' },
      // Add more dummy data as needed
    ];

    this.platService.getLands().subscribe(
      (response:any) => {
        console.log('Fecthing lands', response);
        this.myRequests = response
      },
      error => {
        console.error('Login failed', error);
        // Handle login error (e.g., display an error message)
      }
    );



  }


  




}
