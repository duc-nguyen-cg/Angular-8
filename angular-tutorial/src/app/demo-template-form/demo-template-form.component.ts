import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-demo-template-form',
  templateUrl: './demo-template-form.component.html',
  styleUrls: ['./demo-template-form.component.css']
})
export class DemoTemplateFormComponent implements OnInit {
  book = {name: 'Cosmos', year: 1993, stars: 5};

  constructor() {
  }

  ngOnInit() {
  }

}
