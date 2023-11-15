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
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
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
export class PortfolioComponent implements OnInit {
  constructor(
    private titleService: Title,
    private contentService: ContentService
  ) {}

  ngOnInit() {
    this.titleService.setTitle(`${this.contentService.name} | Portfolio`);
  }


}
