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
  constructor() {}

  ngOnInit() {

  }


}
