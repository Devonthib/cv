import { Component } from '@angular/core';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons/faCircleXmark';
import { ContentService } from 'src/app/content.service';

export interface Alert {
  type: string;
  message: string;
}

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent {

  constructor(
    public contentService: ContentService,
  ) {}

  alertList = this.contentService.alertList;

  faCircleXmark = faCircleXmark;


  getAlertClass(type: string): string {
    switch (type) {
      case 'danger':
        return 'alert-danger';
      case 'warning':
        return 'alert-warning';
      case 'success':
        return 'alert-success';
      default:
        return 'alert-primary';
    }
  }

  removeAlert(index: number) {
    this.alertList.splice(index, 1);
  }

  testAlerts() {
    this.contentService.addAlert('danger', 'Danger alert');
    this.contentService.addAlert('warning', 'Warning alert');
    this.contentService.addAlert('success', 'Success alert');
  }

}
