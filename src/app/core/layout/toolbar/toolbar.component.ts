import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../navigation/navigation.service';

@Component({
  selector: 'bs-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  constructor(private _navigationService: NavigationService) { }

  ngOnInit(): void {
  }

  /**
   * Hide or show the sidebar navigation.
   */
  onToggleNavigation() {
    this._navigationService.doToggleNavigation();
  }
}
