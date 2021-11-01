import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { ConfigService } from 'src/app/config/config.service';
import { NavigationItem } from './navigation/navigation.model';

@Component({
  selector: 'bs-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LayoutComponent implements OnInit {
  toolbarLabel: any;
  navigation: NavigationItem[] = [    
    {
      id      : 'timer',
      title   : 'Timer',
      subtitle: 'Display the timer page.',
      icon    : 'av_timer',
      link    : '/timer'
    },
    {
      id      : 'stop-watch',
      title   : 'Stop Watch',
      subtitle: 'Display the stop watch page.',
      icon    : 'watch_later',
      link    : '/stop-watch'
    },
  ];
  constructor(@Inject(DOCUMENT) private _document: any, private _router: Router) { }

  ngOnInit(): void {
    this.toolbarLabel = this.navigation.find(item => item.id === this._router.url.split('/')[1])
    if (ConfigService.settings.appConfig.theme) {
      this.setTheme(ConfigService.settings.appConfig.theme);
    }
  }

  setTheme(mode: any) {
    this._document.body.classList.remove('light', 'dark');
    this._document.body.classList.add(mode);
  }
}
