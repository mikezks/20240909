import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, MaybeAsync } from "@angular/router";
import { Observable, of } from "rxjs";
import { Flight } from "../model/flight";
import { FlightService } from "./flight.service";


export function resolveFlight(route: ActivatedRouteSnapshot): MaybeAsync<Observable<Flight>> {
  const flightService = inject(FlightService);

  const id = +(route.paramMap.get('id') ?? 0);
  const flight = flightService.flights.find(f => f.id === id);

  return flight ? of(flight) : flightService.findById(id);
}
