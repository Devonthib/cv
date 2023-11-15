import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../../core/layout.service';
import { ContentService } from 'src/app/content.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  footerContainerCssClasses: string = '';
  currentDateStr: string = new Date().getFullYear().toString();
  constructor(
    private layout: LayoutService,
    private contentService: ContentService
    ) {}

  name = "";

  ngOnInit(): void {
    this.footerContainerCssClasses =
      this.layout.getStringCSSClasses('footerContainer');
    this.name = this.contentService.name
  }
}
