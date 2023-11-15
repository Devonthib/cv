import { NgModule } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ModalsModule, WidgetsModule } from '../../_metronic/partials';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ContactComponent } from './contact.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [ContactComponent],
  imports: [
    CommonModule,
    NgIf,
    RouterModule.forChild([
      {
        path: '',
        component: ContactComponent,
      },
    ]),
    WidgetsModule,
    ModalsModule,
    FontAwesomeModule,
    FormsModule
  ],
})
export class ContactModule {}

