import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-count',
  templateUrl: './child-count.component.html',
  styleUrls: ['./child-count.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ChildCountComponent implements OnInit {
  @Input() count = 0;
  @Output() result = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
  }
  increment() {
    this.count++;
    this.result.emit(this.count);
  }

}
