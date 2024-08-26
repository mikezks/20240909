import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { BoardingRoutingModule } from './boarding-routing.module';
import { DepatureComponent } from './feature-departure/flight-departure/departure.component';


@NgModule({
  declarations: [
    DepatureComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BoardingRoutingModule
  ]
})
export class BoardingModule { }
