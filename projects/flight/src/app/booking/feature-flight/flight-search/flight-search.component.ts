import { CommonModule } from '@angular/common';
import { Component, computed, effect, inject, Injector, runInInjectionContext, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Flight, FlightFilter, injectTicketsFacade } from '../../logic-flight';
import { FlightCardComponent, FlightFilterComponent } from '../../ui-flight';
import { Router } from '@angular/router';
import { combineLatest, distinctUntilChanged, of } from 'rxjs';


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
  private injector = inject(Injector);
  private ticketsFacade = injectTicketsFacade();

  protected filter = signal({
    from: 'London',
    to: 'New York',
    urgent: false
  });
  protected flightRoute = computed(
    () => 'From ' + this.filter().from + ' to ' + this.filter().to + '.'
  );
  protected basket: Record<number, boolean> = {
    3: true,
    5: true
  };
  protected flights = this.ticketsFacade.flights;

  constructor() {
    effect(() => console.log(this.flightRoute()));

    console.log(this.filter().from);
    this.filter.update(filter => ({ ...filter, from: 'Barcelona' }));
    console.log(this.filter().from);
    this.filter.update(filter => ({ ...filter, from: 'Rome' }));
    console.log(this.filter().from);
    this.filter.update(filter => ({ ...filter, from: 'Athens' }));
    console.log(this.filter().from);
    this.filter.update(filter => ({ ...filter, from: 'Oslo' }));
    console.log(this.filter().from);

    const counter = signal(0);
    const isEven = computed(() => counter() % 2 ? true : false);
    counter.set(1); // => counter: 1; (isEven: true); isEven: false
  }

  protected search(filter: FlightFilter): void {
    effect(() => console.log(this.flightRoute()), {
      injector: this.injector
    });

    const router = runInInjectionContext(
      this.injector,
      () => inject(Router)
    );

    this.injector.get(Router);

    this.filter.set(filter);

    if (!this.filter().from || !this.filter().to) {
      return;
    }

    this.ticketsFacade.search(this.filter());
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
