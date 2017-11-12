import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-two-way-bind',
  templateUrl: './two-way-bind.component.html',
  styleUrls: ['./two-way-bind.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TwoWayBindComponent implements OnInit {
  title: String;
  constructor() { }

  ngOnInit() {
  }

}
