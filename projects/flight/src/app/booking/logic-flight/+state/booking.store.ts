import { patchState, signalStore, withComputed, withHooks, withMethods, withState } from "@ngrx/signals";
import { Flight } from "../model/flight";
import { computed } from "@angular/core";

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
    setFlights: (flights: Flight[]) => patchState(store, { flights })
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
