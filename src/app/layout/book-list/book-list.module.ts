import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookListRoutingModule } from './book-list-routing.module';
import { BookListComponent } from './book-list.component';
import { MaterialNavigationModule } from '../../shared/modules/material-components/material-navigation.module';
import { MaterialPopupsModule } from '../../shared/modules/material-components/material-popups.module';
import { MaterialButtonsModule } from '../../shared/modules/material-components/material-buttons.module';
import { MaterialLayoutModule } from '../../shared/modules/material-components/material-layout.module';

@NgModule({
  imports: [
    CommonModule,
    BookListRoutingModule,
    MaterialNavigationModule,
    MaterialPopupsModule,
    MaterialButtonsModule,
    MaterialLayoutModule
  ],
  declarations: [BookListComponent]
})
export class BookListModule { }