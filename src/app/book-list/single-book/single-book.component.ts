import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/app/models/Book.model';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-single-book',
  templateUrl: './single-book.component.html',
  styleUrls: ['./single-book.component.scss']
})
export class SingleBookComponent implements OnInit {

  book!: Book;

  constructor(private route       : ActivatedRoute,
              private booksService: BooksService,
              private router      : Router) { }

/**
 * We get the id from the route, we call the getSingleBook() method of the BooksService, and we assign
 * the result to the book property
 */
  ngOnInit() {
    this.book = new Book('', '');
    const id = this.route.snapshot.params['id'];
    this.booksService.getSingleBook(+id).then(
      // initialement (book: Book)
      // pb : Argument of type void is not assignable to parameter of type
      (book: any) => {
        this.book = book;
      }
    );
  }

/**
 * The function navigates to the books route
 */
  onBack() {
    this.router.navigate(['/books']);
  }

}
