import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BSCardComponent } from './card.component';

@NgModule({
    declarations: [
        BSCardComponent
    ],
    imports     : [
        CommonModule
    ],
    exports     : [
        BSCardComponent
    ]
})
export class BSCardModule
{
}
