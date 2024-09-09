import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightCardComponent } from './flight-card/flight-card.component';
import { FlightFilterComponent } from './flight-filter/flight-filter.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        FlightCardComponent,
        FlightFilterComponent,
    ],
    exports: [
        FlightCardComponent,
        FlightFilterComponent
    ]
})
export class UiFlightModule { }
