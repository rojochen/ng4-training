import { Component, OnInit, OnChanges, SimpleChanges, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-parent-count',
  templateUrl: './parent-count.component.html',
  styleUrls: ['./parent-count.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ParentCountComponent implements OnInit, OnChanges {
  num: number;
  parentCount: number;
  constructor() {
    this.num = 0;
    this.parentCount = 0;
  }
  ngOnChanges(val) {
    this.parentCount = val;
  }
  ngOnInit() {
  }
}
