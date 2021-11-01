import { Route } from '@angular/router';
import { LayoutComponent } from './core/layout/layout.component';

export const appRoutes: Route[] = [

    {path: '', pathMatch : 'full', redirectTo: 'timer'},

    {
        path       : '',
        component  : LayoutComponent,
        children   : [
            {path: 'timer', loadChildren: () => import('./modules/pages/timer/timer.module').then(m => m.TimerModule)},
        ]
    },
    {
        path       : '',
        component  : LayoutComponent,
        children   : [
            {path: 'stop-watch', loadChildren: () => import('./modules/pages/stop-watch/stop-watch.module').then(m => m.StopWatchModule)},
        ]
    },
];
