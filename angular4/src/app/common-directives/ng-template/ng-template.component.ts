import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
@Component({
  selector: 'app-ng-template',
  templateUrl: './ng-template.component.html',
  styleUrls: ['./ng-template.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NgTemplateComponent implements OnInit {
  auth: Observable<{}>;
  constructor() { }

  ngOnInit() {
    this.auth = Observable
      .of({ username: 'semlinker!', password: 'segmentfault' })
      .delay(new Date(Date.now() + 2000));
  }
}
