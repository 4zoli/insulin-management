import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../../models/user.model';

import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class GoogleAuthService {
  user$: Observable<User> = new Observable<User>();

  constructor(
    public afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router
  ) {
    this.user$ = this.afAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        } else {
          return of(null);
        }
      })
    );
  }

  async googleSignin() {
    const provider = new auth.GoogleAuthProvider();
    const {user} = await this.afAuth.auth.signInWithPopup(provider);
    this.router.navigateByUrl('/app-root', { skipLocationChange: true }).then(() => {
      this.router.navigate(['user-profile']);
    });
    return this.updateUserData(user);
  }

  async signOut() {
    await this.afAuth.auth.signOut();
    this.router.navigate(['/']);
  }

  private updateUserData({displayName, email, photoURL, uid}): Promise<void> {
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${uid}`);

    const data = {
      uid,
      email,
      displayName,
      photoURL
    };
    // @ts-ignore
    return userRef.set(data, {merge: true});
  }
}

