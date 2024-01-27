import { Component } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  templateUrl: './success-alert.dialog.html',
  styleUrls: ['./success-alert.dialog.scss']
})
export class SuccessAlertDialog {


   closeSuccessCard() {
    var successCard = document.getElementById('successCard');
    if(successCard){
      successCard.style.display = 'none';
    }
    
  }
}
