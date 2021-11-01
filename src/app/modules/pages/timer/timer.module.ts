import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimerComponent } from './timer.component';
import { Route, RouterModule } from '@angular/router';
import { BSCardModule } from 'src/@brainshark-framework/components/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from '../../components/components.module';

const timerRoutes: Route[] = [
  {
      path     : '',
      component: TimerComponent
  }
];

@NgModule({
  declarations: [
    TimerComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(timerRoutes),
    BSCardModule,
    MatIconModule,
    MatTooltipModule,
    MatProgressBarModule,
    MatFormFieldModule,
    FormsModule,
    ComponentsModule
  ]
})
export class TimerModule { }
