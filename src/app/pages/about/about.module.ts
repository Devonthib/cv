import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ModalsModule, WidgetsModule } from '../../_metronic/partials';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AboutComponent } from './about.component';
import { AutosizeModule } from 'ngx-autosize';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [AboutComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: AboutComponent,
      },
    ]),
    WidgetsModule,
    ModalsModule,
    FontAwesomeModule,
    AutosizeModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatSelectModule,
    NgbModule,
  ],
})
export class AboutModule {}
