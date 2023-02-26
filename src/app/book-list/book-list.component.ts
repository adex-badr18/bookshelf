import { Component, OnInit } from '@angular/core';
import { Book } from '../models/Book';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  bookList: Book[] = [];

  constructor() { }

  ngOnInit(): void {
    this.bookList = [
      {
        id: 1,
        title: 'Pride and Prejudice',
      },
      {
        id: 2,
        title: 'The Great Gatsby',
      },
      {
        id: 3,
        title: 'The Catcher in the Rye',
      }
    ]
  }

}
