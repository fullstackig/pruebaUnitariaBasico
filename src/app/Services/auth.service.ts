import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token')
  }

  hola(value: string, col: boolean): any {
    return { black: true }
  }

  // isAuthenticated2(): Promise<boolean> {
  //   return Promise.resolve(!!localStorage.getItem('token'));
  // }
}
