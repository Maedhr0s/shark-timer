import { Component, HostBinding, Input, OnChanges, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';
import { CardFace } from './card.types';

@Component({
    selector     : 'bs-card',
    templateUrl  : './card.component.html',
    styleUrls    : ['./card.component.scss'],
    encapsulation: ViewEncapsulation.None,
    exportAs     : 'bsCard'
})
export class BSCardComponent implements OnChanges
{
    static ngAcceptInputType_flippable: BooleanInput;

    @Input() face: CardFace = 'front';
    @Input() flippable: boolean = false;

    /**
     * Constructor
     */
    constructor()
    {
    }

    /**
     * Host binding for component classes
     */
    @HostBinding('class') get classList(): any
    {
        return {
            'bs-card-face-back' : this.flippable && this.face === 'back',
            'bs-card-face-front': this.flippable && this.face === 'front',
            'bs-card-flippable' : this.flippable
        };
    }

    /**
     * On changes
     *
     * @param changes
     */
    ngOnChanges(changes: SimpleChanges): void
    {
        if ( 'flippable' in changes )
        {
            this.flippable = coerceBooleanProperty(changes.flippable.currentValue);
        }
    }
}
