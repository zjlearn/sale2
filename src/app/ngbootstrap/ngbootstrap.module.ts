import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CarouselModule} from 'ngx-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    CarouselModule
  ],
  exports: [
    CarouselModule
  ],
  declarations: []
})
export class NgbootstrapModule { }
