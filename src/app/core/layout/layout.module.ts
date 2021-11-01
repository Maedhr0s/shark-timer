import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NavigationComponent } from './navigation/navigation.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { FooterComponent } from './footer/footer.component';
import { MatIconModule } from '@angular/material/icon';
import { TimeControllerComponent } from 'src/app/modules/components/time-controller/time-controller.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FullscreenModule } from 'src/@brainshark-framework/components/fullscreen/fullscreen.module';

@NgModule({
  declarations: [
    LayoutComponent,
    NavigationComponent,
    ToolbarComponent,
    FooterComponent,
    TimeControllerComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatSidenavModule,
    MatIconModule,
    MatTooltipModule,
    FullscreenModule
  ]
})
export class LayoutModule { }
