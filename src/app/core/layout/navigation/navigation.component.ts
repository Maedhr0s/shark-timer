import { Component, HostBinding, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { NavigationItem } from './navigation.model';
import { NavigationService } from './navigation.service';

@Component({
  selector: 'bs-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NavigationComponent implements OnInit {
  @Input() navigation: NavigationItem[];
  opened: boolean = true;

  constructor(private _navigationService: NavigationService) { }

    /**
     * Host binding for component classes
     */
    @HostBinding('class') get classList(): any
    {
        return {
            'navigation-mode-side': true,
            'navigation-opened'   : this.opened,
        };
    }

    /**
     * Host binding for component inline styles
     */
    @HostBinding('style') get styleList(): any
    {
        return {
            'visibility': this.opened ? 'visible' : 'hidden'
        };
    }

    ngOnInit(): void {
        this._navigationService.isOpenNav$.subscribe((isOpen) => {
        this.opened = isOpen;
    });
    }

    /**
     * Toggle the navigation
     */
    toggle(): void
    {
        this.opened = !this.opened;
    }

}
