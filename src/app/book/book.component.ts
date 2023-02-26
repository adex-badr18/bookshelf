import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Book } from '../models/Book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  @Input() book: Book;
  @Output() marked = new EventEmitter();

  constructor() {
    this.book = {
      id: 0,
      title: '',
      isFavorite: false
    }
  }

  ngOnInit(): void {

  }

  mark(book: Book): void {
    this.marked.emit(book);
  }
}
