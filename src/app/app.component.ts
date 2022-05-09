import { Component } from '@angular/core';
import { initializeApp } from "firebase/app";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2jAmfxfk4eXmL64W8BAxR_wNkY6LSHpA",
  authDomain: "bookshelves-28a2a.firebaseapp.com",
  projectId: "bookshelves-28a2a",
  storageBucket: "bookshelves-28a2a.appspot.com",
  messagingSenderId: "723787039894",
  appId: "1:723787039894:web:31323a68daf4c81fa8eeb7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
  }
}
