import { Injectable } from '@angular/core';


export interface Alert {
  type: string;
  message: string;
}

@Injectable({
  providedIn: 'root',
})
export class ContentService {

  constructor(
  ) {}

  alertList: Alert[] = [];

  // Site Specific
  name = 'Devon';
  logo = './assets/media/logos/SharpDark.png';


  // ALERT HANDLING
  addAlert(type: string, message: string, duration?: number) {
    const alert: Alert = { type, message };
    this.alertList.push(alert);

    if (duration) {
      setTimeout(() => {
        const index = this.alertList.indexOf(alert);
        if (index !== -1) {
          this.alertList.splice(index, 1);
        }
      }, (duration * 1000));
    }
  }

  clearAlerts() {
    this.alertList.length = 0;
  }
}
