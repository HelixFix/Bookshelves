import { Component, OnInit } from '@angular/core';
import firebase from 'firebase/compat/app';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isAuth!: Boolean;

  constructor(private authService: AuthService) { }

/**
 * When the component is initialized, check if the user is authenticated and set the isAuth variable
 * accordingly.
 */
  ngOnInit(): void {
    firebase.auth().onAuthStateChanged(
      (user) => {
        if(user) {
          this.isAuth = true;
        } else {
          this.isAuth = false;
        }
      }
    )
  }

/**
 * It calls the signOutUser() function from the authService
 */
  onSignOut() {
    this.authService.signOutUser();
  }

}
