import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CheckinRoutingModule } from './checkin-routing.module';
import { PassengerEditComponent, PassengerSearchComponent } from './feature-passenger';


@NgModule({
  declarations: [
    PassengerEditComponent,
    PassengerSearchComponent
  ],
  imports: [
    CommonModule,
    CheckinRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CheckinModule { }
