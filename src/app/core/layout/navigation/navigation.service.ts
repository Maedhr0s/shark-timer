import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
    isOpenNav$ = new BehaviorSubject<boolean>(true);
    isOpen: boolean = true;
    constructor() { }

    doOpen() {
        this.isOpenNav$.next(true);
    }

    doClose() {
        this.isOpenNav$.next(false);
    }

    doToggleNavigation(): void {
        this.isOpen = !this.isOpen;
        this.isOpenNav$.next(this.isOpen);
    }
}
