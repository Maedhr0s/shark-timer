import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeDisplayComponent } from './time-display/time-display.component';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { FormsModule } from '@angular/forms';
import { BSCardModule } from 'src/@brainshark-framework/components/card';

@NgModule({
  declarations: [
    TimeDisplayComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    FormsModule,
    BSCardModule,
    MatProgressBarModule
  ],
  exports: [
    TimeDisplayComponent
  ]
})
export class ComponentsModule { }
