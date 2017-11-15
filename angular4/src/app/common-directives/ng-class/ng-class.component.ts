import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styleUrls: ['./ng-class.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NgClassComponent implements OnInit {
  isBordered: Boolean = true;
  constructor() { }

  ngOnInit() {
  }

}
