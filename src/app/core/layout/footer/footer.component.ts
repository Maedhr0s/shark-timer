import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/config/config.service';

@Component({
  selector: 'bs-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  isDarkMode: boolean = true;
  showThemeToggle: boolean = true;
  isFullscreenAllowed: boolean = true;
  constructor(@Inject(DOCUMENT) private _document: any) { }

  ngOnInit(): void {
    this.showThemeToggle = ConfigService.settings.appConfig.showThemeToggle;
    this.isFullscreenAllowed =  ConfigService.settings.appConfig.allowFullscreen;
    this.isDarkMode = ConfigService.settings.appConfig.theme == 'dark';
  }

  onToggleMode(mode: any) {
    console.log(mode);
    this._document.body.classList.remove('light', 'dark');
    this._document.body.classList.add(mode);
  }
}
