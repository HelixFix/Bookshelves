import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  signInForm!: FormGroup;
  errorMessage!: string;

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private router     : Router) { }

  ngOnInit(): void {
    this.initForm();
  }

/**
 * We create a new FormGroup object and assign it to the signUpForm property
 */
  initForm() {
    this.signInForm = this.formBuilder.group({
      email   : ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(/[0-9a-zA-Z]{6,}/)]]
    });
  }

/**
 * We get the email and password from the form, then we call the createNewUser() function from the
 * authService. If the user is created successfully, we navigate to the books page. If there's an
 * error, we display it
 */
  onSubmit() {
    const email    = this.signInForm.get('email')?.value;
    const password = this.signInForm.get('password')?.value;
    this.authService.signInUser(email, password).then(
      () => {
        this.router.navigate(['/books']);
      },
      (error) => {
        this.errorMessage = error;
      }
    )
  }

}
