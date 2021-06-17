import { Component, Input, OnInit, Self } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-date-input',
  templateUrl: './date-input.component.html',
  styleUrls: ['./date-input.component.css']
})
export class DateInputComponent implements ControlValueAccessor {
  @Input() label:string;
  @Input() maxDate:Date;
  // every single property in this type, it will be optional
  bsConfig: Partial<BsDatepickerConfig>

// so dependencies are injected locally rather than getting from a dependency tree
  constructor(@Self() public ngControl:NgControl) {
    this.ngControl.valueAccessor=this;
    this.bsConfig={
      containerClass:'theme-red',
      dateInputFormat:'DD MMMM YYYY'
    }
   }
  writeValue(obj: any): void {
    
  }
  registerOnChange(fn: any): void {
    
  }
  registerOnTouched(fn: any): void {
    
  }

  

}
