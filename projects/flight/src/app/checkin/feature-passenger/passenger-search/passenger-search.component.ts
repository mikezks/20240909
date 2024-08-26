import { Component, Inject } from '@angular/core';
import { Passenger, PassengerStore } from '../../logic-passenger';


@Component({
  selector: 'app-passenger-search',
  templateUrl: './passenger-search.component.html'
})
export class PassengerSearchComponent {
  firstname = '';
  lastname = 'Smith';
  passengers = this.store.passengerEntities;
  selectedPassenger?: Passenger;

  constructor(@Inject(PassengerStore) private store: InstanceType<typeof PassengerStore>) {}

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
