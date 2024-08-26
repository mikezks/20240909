import { inject } from "@angular/core";
import { ActivatedRouteSnapshot } from "@angular/router";
import { Observable, of } from "rxjs";
import { FlightService } from "./flight.service";
import { Flight } from "../model/flight";


export const resolveFlights = (route: ActivatedRouteSnapshot): Observable<Flight> => {
  const flightService = inject(FlightService);
  const id = +(route.paramMap.get('id') ?? 0);
  const flight = flightService.flights.find(f => f.id === id);

  return flight ? of(flight) : flightService.findById(id);
};

export const flightsResolverConfig = {
  flight: resolveFlights
};
