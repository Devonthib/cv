import { Component, OnInit} from '@angular/core';
import { ContentService } from 'src/app/content.service';
import { Title } from '@angular/platform-browser';

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
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
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
export class AboutComponent implements OnInit {
  constructor(
    private titleService: Title,
    private contentService: ContentService
  ) {}

  ngOnInit() {
    this.titleService.setTitle(`${this.contentService.name} | About`);
  }


}
