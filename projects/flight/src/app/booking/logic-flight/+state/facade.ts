import { inject } from "@angular/core";
import { Flight } from "../model/flight";
import { FlightFilter } from "../model/flight-filter";
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
