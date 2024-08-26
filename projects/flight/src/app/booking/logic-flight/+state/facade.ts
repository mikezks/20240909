import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { Flight } from "../model/flight";
import { FlightFilter } from "../model/flight-filter";
import { ticketActions } from "./actions";
import { ticketFeature } from "./reducer";


@Injectable({
  providedIn: 'root'
})
export class TicketsFacade {
  flights$ = this.store.select(ticketFeature.selectFlights);

  constructor(private store: Store) {}

  search(filter: FlightFilter): void {
    this.store.dispatch(ticketActions.flightsLoad(filter));
  }

  update(flight: Flight): void {
    this.store.dispatch(ticketActions.flightUpdate({ flight }));
  }

  reset(): void {
    this.store.dispatch(ticketActions.flightsClear());
  }
}
