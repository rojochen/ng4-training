import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-property-bind',
  templateUrl: './property-bind.component.html',
  styleUrls: ['./property-bind.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PropertyBindComponent implements OnInit {
  title: String = `This's property-bind`;
  constructor() { }

  ngOnInit() {
  }

}
