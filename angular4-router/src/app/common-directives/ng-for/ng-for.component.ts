import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NgForComponent implements OnInit {
  collection: Array<any>;
  constructor() {
    this.collection = [{ id: 1 }, { id: 2 }, { id: 3 }];
  }

  ngOnInit() {
  }
  getItems() {
    this.collection = this.getItemsFromServer();
  }

  getItemsFromServer() {
    return [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];
  }

  trackByFn(index, item) {
    return index; // or item.id
  }

}
