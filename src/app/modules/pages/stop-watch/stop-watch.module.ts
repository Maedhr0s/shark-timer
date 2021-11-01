import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { StopWatchComponent } from './stop-watch.component';
import { ComponentsModule } from '../../components/components.module';

const stopWatchRoutes: Route[] = [
  {
      path     : '',
      component: StopWatchComponent
  }
];

@NgModule({
  declarations: [
    StopWatchComponent    
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(stopWatchRoutes),
    ComponentsModule
  ]
})
export class StopWatchModule { }
