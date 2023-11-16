import { Component, OnInit} from '@angular/core';
import { ThemeModeType, ThemeModeService } from 'src/app/_metronic/partials/layout/theme-mode-switcher/theme-mode.service';
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
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
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
export class HomeComponent implements OnInit {
  currentTheme: ThemeModeType;

  constructor(
    private themeModeService: ThemeModeService,
    private titleService: Title,
    private contentService: ContentService
    ) {
    this.currentTheme = this.themeModeService.getCurrentTheme();

  }

  ngOnInit() {
    console.log(this.currentTheme)
    this.titleService.setTitle(`Devon Thibodeau`);
  }
}
