import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../../core/layout.service';
import { faCircleUser } from '@fortawesome/free-regular-svg-icons/faCircleUser';


@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss'],
})
export class TopbarComponent implements OnInit {
  toolbarButtonMarginClass = 'ms-1 ms-lg-3';
  toolbarButtonHeightClass = 'w-30px h-30px w-md-40px h-md-40px';
  toolbarUserAvatarHeightClass = 'symbol-30px symbol-md-40px';
  toolbarButtonIconSizeClass = 'svg-icon-1';
  headerLeft: string = 'menu';
  userIcon  = faCircleUser

  constructor(
    private layout: LayoutService,
    ) {}

  ngOnInit(): void {
    this.headerLeft = this.layout.getProp('header.left') as string;
  }
}
