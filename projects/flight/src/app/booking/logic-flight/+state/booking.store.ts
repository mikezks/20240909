import { patchState, signalStore, withComputed, withHooks, withMethods, withState } from "@ngrx/signals";
import { Flight } from "../model/flight";
import { computed, inject } from "@angular/core";
import { FlightService } from "../data-access/flight.service";
import { rxMethod } from "@ngrx/signals/rxjs-interop";
import { pipe, switchMap, tap } from "rxjs";
import { FlightFilter } from "../model/flight-filter";

export const BookingStore = signalStore(
  { providedIn: 'root' },
  withState({
    flights: [] as Flight[],
    basket: {} as Record<number, boolean>
  }),
  withComputed(store => ({
    delayedFlights: computed(() => store.flights())
  })),
  withMethods(store => ({
    setFlights: (flights: Flight[]) => patchState(store, { flights }),
    updateFlight: (updatedFlight: Flight) => patchState(store, state => ({
      flights: state.flights.map(flight =>
        flight.id === updatedFlight.id ? updatedFlight : flight
      ),
    })),
    resetFlights: () => patchState(store, { flights: [] }),
  })),
  withMethods((store, flightService = inject(FlightService)) => ({
    loadFlights: rxMethod<FlightFilter>(pipe(
      switchMap(filter => flightService.find(
        filter.from,
        filter.to,
        filter.urgent
      )),
      tap(flights => store.setFlights(flights))
    )),
  })),
  withHooks(store => ({
    onInit: () => store.setFlights([
      {
        id: 999,
        from: 'Rio',
        to: 'Tokio',
        date: new Date().toISOString(),
        delayed: true
      }
    ])
  }))
);
