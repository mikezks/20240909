import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { FlightFilter } from "../model/flight-filter";
import { Flight } from "../model/flight";

export const ticketActions = createActionGroup({
  source: 'tickets',
  events: {
    'flights load': props<FlightFilter>(),
    'flights loaded': props<{ flights: Flight[] }>(),
    'flights loaded by passenger': props<{ flights: Flight[] }>(),
    'flight update': props<{ flight: Flight }>(),
    'flights clear': emptyProps()
  }
});
