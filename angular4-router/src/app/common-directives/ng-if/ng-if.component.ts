import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NgIfComponent implements OnInit {
  a: Number = 10;
  b: Number = 9;
  str: String = 'yes';
  constructor() { }

  ngOnInit() {
  }
  myFunc(): Boolean {
    return true;
  }
}
