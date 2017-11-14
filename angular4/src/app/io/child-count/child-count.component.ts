import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-child-count',
  templateUrl: './child-count.component.html',
  styleUrls: ['./child-count.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ChildCountComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
