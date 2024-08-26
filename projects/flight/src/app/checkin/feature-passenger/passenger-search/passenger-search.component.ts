import { NgFor, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { PassengerStore, Passenger } from '../../logic-passenger';


@Component({
  selector: 'app-passenger-search',
  standalone: true,
  imports: [
    NgFor, NgIf,
    RouterLink,
    FormsModule
  ],
  templateUrl: './passenger-search.component.html'
})
export class PassengerSearchComponent {
  private store = inject(PassengerStore);

  firstname = '';
  lastname = 'Smith';
  passengers = this.store.passengerEntities;
  selectedPassenger?: Passenger;

  search(): void {
    if (!(this.firstname || this.lastname)) return;

    this.store.loadPassengers({
      firstName: this.firstname,
      name: this.lastname
    });
  }

  select(passenger: Passenger): void {
    this.selectedPassenger = this.selectedPassenger === passenger ? undefined : passenger;
  }
}
