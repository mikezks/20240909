
import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { FlightFilter } from '../../logic-flight';


@Component({
  selector: 'app-flight-filter',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './flight-filter.component.html'
})
export class FlightFilterComponent {
  @Input() set filter(filter: FlightFilter) {
    this.inputFilterForm.setValue(filter);
  }

  @Output() searchTrigger = new EventEmitter<FlightFilter>();

  protected inputFilterForm = inject(FormBuilder).nonNullable.group({
    from: ['', [Validators.required]],
    to: ['', [Validators.required]],
    urgent: [false],
  });

  protected selectedFilterControl = new FormControl(this.inputFilterForm.getRawValue(), {
    nonNullable: true,
  });

  protected triggerSearch(): void {
    this.searchTrigger.emit(this.inputFilterForm.getRawValue());
  }
}
