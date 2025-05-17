import { Component, Input, OnInit } from '@angular/core';
import { IConceptMapPagDAOService } from '../../../../../@oh/hncat-services/build/service/dao/concept-map-pag-dao.interface';

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
   @Input() mainButton: boolean | undefined;
   @Input() tooltip: string | undefined;
   @Input() icon: any | undefined;
   @Input() disabled: boolean | undefined;

   //tooltip: string = '';

  constructor() { }

  ngOnInit() {
  }

}
