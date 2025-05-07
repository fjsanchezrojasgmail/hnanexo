import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'hn-dialog-component',
  standalone: true,
  imports:[],
  templateUrl: './hn-dialog-component.component.html',
  styleUrls: ['./hn-dialog-component.component.css']
})
export class HnDialogComponent implements OnInit {

  display: boolean = false;

  @Input() titleHeader: string | undefined;


  constructor() { }

  ngOnInit() {
  }

}
