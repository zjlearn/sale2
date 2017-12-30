import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  MatButtonModule, MatToolbarModule, MatIconModule,
  MatCardModule, MatSidenavModule, MatInputModule, MatTooltipModule, MatOptionModule, MatSelectModule, MatStepperModule,
  MatListModule, MatProgressBarModule, MatPaginatorModule, MatProgressSpinnerModule
} from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatSidenavModule,
    MatInputModule,
    MatFormFieldModule,
    MatTooltipModule,
    MatOptionModule,
    MatSelectModule,
    MatStepperModule,
    MatListModule,
    MatProgressBarModule,
    MatPaginatorModule,
    BrowserAnimationsModule
  ],
  exports: [
    MatButtonModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatSidenavModule,
    MatInputModule,
    MatFormFieldModule,
    MatTooltipModule,
    MatOptionModule,
    MatSelectModule,
    MatStepperModule,
    MatListModule,
    MatProgressBarModule,
    MatPaginatorModule,
    BrowserAnimationsModule
  ],
  declarations: []
})
export class MaterialModule {
}
