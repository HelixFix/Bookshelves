import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Book } from 'src/app/models/Book.model';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss']
})
export class BookFormComponent implements OnInit {

  bookForm!: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private bookService: BooksService,
              private router: Router) { }

  ngOnInit(): void {
    this.initForm();
  }

/**
 * We create a new FormGroup object and pass it a JavaScript object with two properties: title and
 * author. Each property is initialized with an empty string and a validator
 */
  initForm() {
    this.bookForm = this.formBuilder.group({
      title : ['', Validators.required],
      author: ['', Validators.required]
    })
  }
  
/**
 * We're getting the values of the title and author fields from the form, creating a new Book object
 * with those values, and then calling the createNewBook() function in the BookService to save the new
 * book
 */

  onSaveBook() {
    const title   = this.bookForm.get('title')?.value;
    const author  = this.bookForm.get('author')?.value;
    const newBook = new Book(title, author);
    this.bookService.createNewBook(newBook);
    this.router.navigate(['/books']);
  }

}
