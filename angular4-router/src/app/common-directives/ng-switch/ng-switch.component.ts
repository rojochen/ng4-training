import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-ng-switch',
  templateUrl: './ng-switch.component.html',
  styleUrls: ['./ng-switch.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NgSwitchComponent implements OnInit {
  myVar: String = 'A';
  constructor() { }

  ngOnInit() {
  }

}
