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
        isFavorite: false
      },
      {
        id: 2,
        title: 'The Great Gatsby',
        isFavorite: false
      },
      {
        id: 3,
        title: 'The Catcher in the Rye',
        isFavorite: false
      }
    ]
  }

  markAsFavorite(book: Book): void {
    // console.log(`${book.title} has been added to favorites.`);
    book.isFavorite = true;
  }

}
