import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { ContentService } from 'src/app/content.service';
import {
  fadeInAnimation,
  slideInFromLeftAnimation,
  slideInFromRightAnimation,
  listItemAnimation,
  slideInFromTopAnimation,
  slideInFromBottomAnimation,
  scaleUpAnimation,
  rotateAnimation,
} from 'src/app/animations';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  animations: [
    fadeInAnimation,
    slideInFromLeftAnimation,
    slideInFromRightAnimation,
    listItemAnimation,
    slideInFromTopAnimation,
    slideInFromBottomAnimation,
    scaleUpAnimation,
    rotateAnimation,
  ],
})
export class ContactComponent {

  faEnvelope = faEnvelope

  constructor(
    private titleService: Title,
    private contentService: ContentService
  ) {}

  email = `devonthibodeau@gmail.com`;

  sendEmail() {

    const subject = 'Hello Devon!';
    const body = 'Please include your inquiry here.';

    const mailtoUrl = `mailto:${this.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;

    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
  }



  ngOnInit() {
    this.titleService.setTitle(`${this.contentService.name} | Contact`);
  }

}
