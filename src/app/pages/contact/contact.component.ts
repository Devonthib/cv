import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { faMessageQuestion } from '@fortawesome/pro-solid-svg-icons';
import { faEnvelope } from '@fortawesome/pro-solid-svg-icons';
import { ContentService } from 'src/app/content.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {

  faMessageQuestion = faMessageQuestion;
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
  }



  ngOnInit() {
    this.titleService.setTitle(`${this.contentService.name} | Contact`);
  }

}
