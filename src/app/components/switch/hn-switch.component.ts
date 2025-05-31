import { CommonModule } from '@angular/common';
import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'hn-switch-component',
  standalone: true,
  imports: [CommonModule,FormsModule],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => HnSwitchComponent),
    multi: true
  }],
  templateUrl: './hn-switch.component.html',
  styleUrls: ['./hn-switch.component.css']
})
export class HnSwitchComponent implements OnInit,ControlValueAccessor {


  ngOnInit(): void {
  }

  @Input() labelOn: string = 'On';
  @Input() labelOff: string = 'Off';
  @Input() disabled: boolean = false;

  value: boolean = false;

  onChange = (_: any) => {};
  onTouched = () => {};

  writeValue(val: any): void {
    this.value = val;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  toggle() {
    if (this.disabled) return;
    this.value = !this.value;
    this.onChange(this.value);
    this.onTouched();
  }
}
