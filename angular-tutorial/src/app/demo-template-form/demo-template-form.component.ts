import {Component, OnInit} from '@angular/core';
import {Book} from './book';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-demo-template-form',
  templateUrl: './demo-template-form.component.html',
  styleUrls: ['./demo-template-form.component.css']
})
export class DemoTemplateFormComponent implements OnInit {
  books: Array<Book> = [];
  newBook: Book = {};
  constructor() {
  }

  ngOnInit() {
    const demoBook: Book = {name: 'Cosmos', year: '1993', stars: '5'};
    this.books.push(demoBook);
  }

  addBook(bookForm) {
    if (bookForm.valid) {
      this.books.push(bookForm.value);
    }
  }
}
