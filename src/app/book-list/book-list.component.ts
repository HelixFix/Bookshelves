import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Book } from '../models/Book.model';
import { BooksService } from '../services/books.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit, OnDestroy {

  books            : Book[] = [];
  bookSubscription!: Subscription;

  constructor(private bookService: BooksService, private router: Router) { }

/**
 * We subscribe to the bookSubject of the bookService, and when we receive the books, we assign them to
 * the books property of the component
 */
  ngOnInit(): void {
    this.bookSubscription = this.bookService.bookSubject.subscribe(
      (books: Book[]) => {
        this.books = books;
      }
    );
    this.bookService.getBooks();
    this.bookService.emitBooks();
  }

/**
 * When the user clicks the button, navigate to the /books/new route.
 */
  onNewBook() {
    this.router.navigate(['/books', 'new']);
  }

/**
 * The function takes a book as an argument, and then calls the removeBook function in the book
 * service, passing the book as an argument
 * @param {Book} book - Book - this is the book object that is passed in from the child component.
 */
  onDeleteBook(book: Book) {
    this.bookService.removeBook(book);
  }

/**
 * We're using the router to navigate to the books route, and then we're passing in the view and id
 * parameters
 * @param {number} id - number - the id of the book to view
 */
  onViewBook(id: number) {
    this.router.navigate(['/books', 'view', id])
  }

/**
 * The function unsubscribes from the bookSubscription, which is a subscription to the book observable
 */
  ngOnDestroy(): void {
    this.bookSubscription.unsubscribe();
  }

}
