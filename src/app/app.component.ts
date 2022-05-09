import { Component } from '@angular/core';
import { initializeApp } from "firebase/app";
import { environment } from '../environments/environment';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 constructor() {

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey           : environment.API_KEY,
  authDomain       : environment.authDomain,
  projectId        : environment.projectId,
  storageBucket    : environment.storageBucket,
  messagingSenderId: environment.messagingSenderId,
  appId            : environment.appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 }
}
