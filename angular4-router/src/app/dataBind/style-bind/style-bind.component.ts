import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-style-bind',
  templateUrl: './style-bind.component.html',
  styleUrls: ['./style-bind.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class StyleBindComponent implements OnInit {
  isSpecial: Boolean = true;
  canSave: Boolean = false;
  constructor() { }

  ngOnInit() {
  }

}
