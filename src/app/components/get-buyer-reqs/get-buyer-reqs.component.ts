import { Component, OnInit } from '@angular/core';
import { PlatformService } from 'src/app/platform.service';

@Component({
  selector: 'app-get-buyer-reqs',
  templateUrl: './get-buyer-reqs.component.html',
  styleUrls: ['./get-buyer-reqs.component.scss']
})
export class GetBuyerReqsComponent implements OnInit{
  buyerRequests: any[] = [];
  constructor(private platService:PlatformService){}
  ngOnInit(): void {
    this.fetchBuyerRequests();
  }
  id:any
  fetchBuyerRequests() {
    this.id = localStorage['aadhar'];
    this.id =this.id.replace(/"/g, '');
    this.platService.getBuyerRequests(this.id).subscribe(
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
