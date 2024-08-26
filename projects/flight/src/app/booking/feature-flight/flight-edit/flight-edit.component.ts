import { Component, Input, OnChanges, SimpleChanges, inject } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { routerFeature } from '../../../shared/logic-router-state';
import { initialFlight } from '../../logic-flight';


@Component({
  selector: 'app-flight-edit',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './flight-edit.component.html'
})
export class FlightEditComponent implements OnChanges {
  private store = inject(Store);

  @Input() flight = initialFlight;

  protected editForm = inject(NonNullableFormBuilder).group({
    id: [0],
    from: [''],
    to: [''],
    date: [new Date().toISOString()],
    delayed: [false]
  });

  constructor() {
    this.store.select(routerFeature.selectRouteParams).subscribe(
      params => console.log(params)
    );
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['flight'].previousValue !== changes['flight'].currentValue) {
      this.editForm.patchValue(this.flight);
    }
  }

  protected save(): void {
    console.log(this.editForm.value);
  }
}
