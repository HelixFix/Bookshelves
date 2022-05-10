import { Injectable } from '@angular/core';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { /* TODO document why this constructor is empty */  }

/**
 * This function creates a new user with the given email and password, and returns a promise that
 * resolves if the user is created successfully, and rejects if the user is not created successfully.
 * @param {string} email - string - The email address of the user.
 * @param {string} password - string - The password for the user.
 * @returns A promise that resolves to void.
 */
  createNewUser(email: string, password: string) {
    return new Promise<void>(
      (resolve, reject) => {
        firebase.auth().createUserWithEmailAndPassword(email, password).then(
          () => {
            resolve();
          },
          (error: any) => {
            reject(error);
          }
        )
      }
    )
  }

/**
 * It returns a promise that resolves if the user signs in successfully, and rejects if the user fails
 * to sign in
 * @param {string} email - string - The email address of the user.
 * @param {string} password - string - The password of the user.
 * @returns A promise
 */
  signInUser(email: string, password: string) {
    return new Promise<void>(
      (resolve, reject) => {
        firebase.auth().signInWithEmailAndPassword(email, password).then(
          () => {
            resolve();
          },
          (error: any) => {
            reject(error);
          }
        )
      }
    )
  }

/**
 * It signs out the user
 */
  signOutUser() {
    firebase.auth().signOut();
  }

}
