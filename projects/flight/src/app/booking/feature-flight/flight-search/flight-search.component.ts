import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Flight, FlightFilter, injectTicketsFacade } from '../../logic-flight';
import { FlightCardComponent, FlightFilterComponent } from '../../ui-flight';


@Component({
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    FlightCardComponent,
    FlightFilterComponent
  ],
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html',
})
export class FlightSearchComponent {
  private ticketsFacade = injectTicketsFacade();

  protected filter = {
    from: 'London',
    to: 'New York',
    urgent: false
  };
  protected basket: Record<number, boolean> = {
    3: true,
    5: true
  };
  protected flights$ = this.ticketsFacade.flights$;

  protected search(filter: FlightFilter): void {
    this.filter = filter;

    if (!this.filter.from || !this.filter.to) {
      return;
    }

    this.ticketsFacade.search(this.filter);
  }

  protected delay(flight: Flight): void {
    const oldFlight = flight;
    const oldDate = new Date(oldFlight.date);

    const newDate = new Date(oldDate.getTime() + 1000 * 60 * 5); // Add 5 min
    const newFlight = {
      ...oldFlight,
      date: newDate.toISOString(),
      delayed: true
    };

    this.ticketsFacade.update(newFlight);
  }

  protected reset(): void {
    this.ticketsFacade.reset();
  }
}
