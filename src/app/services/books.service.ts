import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Book } from '../models/Book.model';
import firebase from 'firebase/compat/app';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  books: Book[]     = [];
        bookSubject = new Subject<Book[]>();

  constructor() { }

/**
 * It emits the books array to the bookSubject
 */
  emitBooks() {
    this.bookSubject.next(this.books);
  }

/**
 * We're going to save the books array to the database
 */
  saveBooks() {
    firebase.database().ref('./books').set(this.books);
  }

/**
 * It gets the books from the database and emits them
 */
  getBooks() {
    firebase.database().ref('/books')
    .on('value', (data) => {
      this.books = data.val() ? data.val() : [];
      this.emitBooks();
    })
  }

/**
 * It returns a promise that will resolve with the data of the book with the given id, or reject with
 * an error
 * @param {number} id - number - the id of the book we want to retrieve
 * @returns A promise that will resolve to the data of the book with the id passed in as a parameter.
 */
  getSingleBook(id: number) {
    return new Promise(
      (resolve, reject) => {
        firebase.database().ref('/books' + id).once('value').then(
          (data) => {
            resolve(data.val());
          }, (error) => {
            reject(error);
          }
        )
      }
    )
  }
 /**
  * It adds a new book to the books array, saves the books array to local storage, and emits the books
  * array to the book-list component
  * @param {Book} newBook - Book
  */
  createNewBook(newBook: Book) {
    this.books.push(newBook);
    this.saveBooks();
    this.emitBooks();
  }

/**
 * We find the index of the book we want to remove in the books array, then we remove it from the array
 * and save the new array in local storage
 * @param {Book} book - Book is the book we want to remove from the array.
 */
  removeBook(book: Book) {
    const bookIndexToRemove = this.books.findIndex(
      (bookEl) => {
        if(bookEl === book){
        return true;
        }
      }
    );
    this.books.splice(bookIndexToRemove, 1);
    this.saveBooks();
    this.emitBooks();
  }
}
