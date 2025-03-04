import {
  Component,
  Input,
  OnInit,
  Injector,
  AfterContentInit,
  ChangeDetectorRef,
} from '@angular/core';
import { FormControl, NG_VALUE_ACCESSOR, NgControl } from '@angular/forms';
import { BaseControlValueAccessor } from '../baseControlValueAccessor';

@Component({
  selector: 'app-forminputs',
  templateUrl: './forminputs.component.html',
  styleUrls: ['./forminputs.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: ForminputsComponent,
      multi: true,
    },
  ],
})
export class ForminputsComponent
  extends BaseControlValueAccessor<string>
  implements OnInit, AfterContentInit
{
  @Input() labelFor: string = '';
  @Input() label: string = '';
  @Input() type: string = '';
  @Input() inputName: string = '';

  control!: FormControl;

  constructor(private injector: Injector, private cdRef: ChangeDetectorRef) {
    super();
  }

  ngOnInit(): void {}

  ngAfterContentInit(): void {
    const ngControl: NgControl = this.injector.get(
      NgControl,
      null
    ) as NgControl;
    if (ngControl) {
      this.control = ngControl.control as FormControl;
    }

    this.cdRef.detectChanges();
  }
}
