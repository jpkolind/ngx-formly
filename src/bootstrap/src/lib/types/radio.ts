import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'formly-field-radio',
  template: `
    <div [formGroup]="form">
      <div class="custom-control custom-radio" *ngFor="let option of to.options; let i = index;">
        <input class="custom-control-input" type="radio"
          [id]="id + '_' + i"
          [name]="id"
          [class.is-invalid]="showError"
          [value]="option.label ? option.value : option.key"
          [formControl]="formControl"
          [formlyAttributes]="field">
        <label class="custom-control-label" [for]="id + '_' + i">
          {{ option.label || option.value }}
        </label>
      </div>
    </div>
  `,
})
export class FormlyFieldRadio extends FieldType {}