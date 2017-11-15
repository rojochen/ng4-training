import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-classbind',
  templateUrl: './classbind.component.html',
  styleUrls: ['./classbind.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ClassbindComponent implements OnInit {
  isSpecial: Boolean = false;
  constructor() { }

  ngOnInit() {
  }

}
