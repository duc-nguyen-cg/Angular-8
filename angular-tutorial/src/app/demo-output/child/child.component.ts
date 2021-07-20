import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Output() itemEvent = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit() {
  }

  addNewItem(value: string) {
    this.itemEvent.emit(value);
  }
}
