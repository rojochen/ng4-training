import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-custom-filter',
  templateUrl: './custom-filter.component.html',
  styleUrls: ['./custom-filter.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CustomFilterComponent implements OnInit {
  numberList: Array<number> = [];
  searchNum: Number;
  constructor() {
    for (let index = 1; index <= 10; index++) {
      this.numberList.push(index);
    }
  }

  ngOnInit() {
  }

}
