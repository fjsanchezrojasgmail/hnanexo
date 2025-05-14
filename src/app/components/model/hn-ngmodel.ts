import { ControlValueAccessor } from '@angular/forms';

export class HnNgmodel implements ControlValueAccessor {

  private innerValue: any;
  private onTouchedCallback: any;
  protected onChangeCallback: ((_: any) => void) | undefined;
  value: any;


  onBlur(): void{

  };
  writeValue(value: any): void {

  };
  registerOnChange(fn: any): void {

  };
  registerOnTouched(fn: any): void {

  };

}


