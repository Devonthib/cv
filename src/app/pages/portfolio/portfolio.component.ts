import { Component, OnInit} from '@angular/core';
import { ContentService } from 'src/app/content.service';
import { Title } from '@angular/platform-browser';
import pitems from './portfolio-items';

import {
  fadeInAnimation,
  slideInFromLeftAnimation,
  slideInFromRightAnimation,
  listItemAnimation,
  slideInFromTopAnimation,
  slideInFromBottomAnimation,
  scaleUpAnimation,
  rotateAnimation,
  slideInAnimation,
  rotate360Animation,
} from 'src/app/animations';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
  animations: [
    fadeInAnimation,
    slideInFromLeftAnimation,
    slideInFromRightAnimation,
    slideInAnimation,
    listItemAnimation,
    slideInFromTopAnimation,
    slideInFromBottomAnimation,
    scaleUpAnimation,
    rotateAnimation,
    rotate360Animation,
  ],
})
export class PortfolioComponent implements OnInit {
  public portfolioItems: any[] = [];
  public selectedItem: any = null;

  constructor(private titleService: Title) {}

  ngOnInit() {
    this.titleService.setTitle('Devon Thibodeau | Portfolio');
    this.loadPortfolioItems();
  }

  loadPortfolioItems() {
    this.portfolioItems = pitems;
  }

  openModal(item: any) {
    this.selectedItem = item;
  }

  closeModal() {
    this.selectedItem = null;
  }
}