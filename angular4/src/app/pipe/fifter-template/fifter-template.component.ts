import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-fifter-template',
  templateUrl: './fifter-template.component.html',
  styleUrls: ['./fifter-template.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class FifterTemplateComponent implements OnInit {
  today: Date = new Date();
  constructor() { }

  ngOnInit() {
  }

}
