import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-event-bind',
  templateUrl: './event-bind.component.html',
  styleUrls: ['./event-bind.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class EventBindComponent implements OnInit {
  title: String;
  constructor() { }

  ngOnInit() {
  }
  setTitle(): void {
    this.title = `This's event-bind`;
  }
}
