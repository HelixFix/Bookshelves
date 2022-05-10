import { Component } from '@angular/core';
import { environment } from '../environments/environment';
import firebase from 'firebase/compat/app';

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
firebase.initializeApp(firebaseConfig);


 }
}
