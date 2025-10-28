import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class Auth {

  constructor(private http: HttpClient, private router: Router) { }

  signIn(email: string, password: string) {
  return this.http
    .post<{ idToken: string; email: string; refreshToken: string; expiresIn: string; localId: string }>(
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDgx7iMcNPokVto93puEIq_X3NppHm79ro',
      { email, password, returnSecureToken: true }
    )
    .subscribe(
      (res) => {
        console.log(res);
        const expirationTime = +res.expiresIn * 1000;
        const expirationDate = new Date(Date.now() + expirationTime).toISOString();

        const user = {
          idToken: res.idToken,
          email: res.email,
          refreshToken: res.refreshToken,
          expiresIn: expirationDate,
          localId: res.localId,
        };
        localStorage.setItem('user', JSON.stringify(user));

        this.autoLogout(expirationTime);
        this.router.navigate(['/dashboard']);
      },
      (err) => {
         console.error('Login failed:', err.error.error.message);
      }
    );
}



  autoLogin() {
    const loggedUser = JSON.parse(localStorage.getItem('user') || 'null');

    if (!loggedUser || null) {
      return;

    }

    const expirationTime = new Date(loggedUser.expiresIn).getTime();
    const currentTime = Date.now();

    if (currentTime >= expirationTime) {
      this.logOut();
    } else {
      const remainingTime = expirationTime - currentTime;
      this.autoLogout(remainingTime);

    }

  }

  logOut() {
    const user = localStorage.getItem('user');
    if (!user) {
      return;
    }
    localStorage.removeItem('user');
    this.router.navigate(['admin'])
  }

  autoLogout(time: number) {
    setTimeout(() => this.logOut(), time)
  }
}
