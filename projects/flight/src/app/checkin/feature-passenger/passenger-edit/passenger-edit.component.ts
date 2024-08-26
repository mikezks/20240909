import { Component } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { distinctUntilChanged, map, switchMap } from 'rxjs';
import { PassengerService } from '../../logic-passenger';
import { validatePassengerStatus } from '../../util-validation';


@Component({
  selector: 'app-passenger-edit',
  templateUrl: './passenger-edit.component.html'
})
export class PassengerEditComponent {
  protected editForm = this.formBuilder.group({
    id: [0],
    firstName: [''],
    name: [''],
    bonusMiles: [0],
    passengerStatus: ['', [
      validatePassengerStatus(['A', 'B', 'C'])
    ]]
  });

  constructor(
    private formBuilder: NonNullableFormBuilder,
    private route: ActivatedRoute,
    private passengerService: PassengerService
  ) {
    this.route.paramMap.pipe(
      map(params => +(params.get('id') || 0)),
      distinctUntilChanged(),
      switchMap(id => this.passengerService.findById(id))
    ).subscribe(
      passenger => this.editForm.patchValue(passenger)
    );
  }

  protected save(): void {
    console.log(this.editForm.value);
  }
}
