import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class InterpolationComponent implements OnInit {

  constructor() { }
  title: String = 'Hello Angular4';
  ngOnInit() {
  }

}
