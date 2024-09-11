import { inject } from "@angular/core"
import { Store } from "@ngrx/store"
import { ticketActions } from "./actions";
import { ticketFeature } from "./reducer";
import { FlightFilter } from "../model/flight-filter";
import { Flight } from "../model/flight";
import { BookingStore } from "./booking.store";


export function injectTicketsFacade() {
  const store = inject(BookingStore);

  return {
    flights: store.flights,
    search: (filter: FlightFilter) => store.loadFlights(filter),
    update: (flight: Flight) => store.updateFlight(flight),
    reset: () => store.resetFlights()
  };
}
