import { Component, OnInit} from '@angular/core';

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
import { ContentService } from 'src/app/content.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
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
export class ResumeComponent implements OnInit {
  constructor(
    private titleService: Title,
    private contentService: ContentService
  ) {}

  ngOnInit() {
    this.titleService.setTitle(`${this.contentService.name} | Resume`);
  }


}
