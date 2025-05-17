import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'hn-label-component',
  standalone: true,
  imports: [],
  templateUrl: './hn-label.component.html',
  styleUrls: ['./hn-label.component.css']
})
export class HnLabelComponent implements OnInit {

  @Input() label: string | undefined;
  @Input() labelBold: string | undefined;
  @Input() infoMessage: string | undefined;
  @Input() errorMessage: string | undefined;
  @Input() messageError: string | undefined;
  @Input() required: boolean | undefined;
  @Input() icon: string | undefined;



  constructor() { }

  ngOnInit() {
  }

}
