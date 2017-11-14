import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-parent-count',
  templateUrl: './parent-count.component.html',
  styleUrls: ['./parent-count.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ParentCountComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
