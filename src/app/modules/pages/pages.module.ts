import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimerComponent } from './timer/timer.component';
import { Route, RouterModule } from '@angular/router';
import { BSCardModule } from 'src/@brainshark-framework/components/card';

const routes: Route[] = [
  {
    path      : '',
    pathMatch : 'full',
    redirectTo: 'timer'
  },
  {
    path: 'timer', loadChildren: () => import('./timer/timer.module').then(m => m.TimerModule),
  },
  {
    path: 'stop-watch', loadChildren: () => import('./stop-watch/stop-watch.module').then(m => m.StopWatchModule)
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    BSCardModule
  ]
})
export class PagesModule { }
