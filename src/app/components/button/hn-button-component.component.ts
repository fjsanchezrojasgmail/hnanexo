import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'hn-button-component',
  standalone: true,
  imports: [],
  templateUrl: './hn-button-component.component.html',
  styleUrls: ['./hn-button-component.component.css']
})
export class HnButtonComponent implements OnInit {

   @Input() label: string | undefined;
   @Input() type: string | undefined;

  constructor() { }

  ngOnInit() {
  }

}
