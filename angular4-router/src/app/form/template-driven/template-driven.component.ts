import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TemplateDrivenComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  submitForm(form: any): void {
    console.log('Form Data: ');
    console.log(form);
  }

}
