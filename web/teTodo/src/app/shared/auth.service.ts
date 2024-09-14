import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  host = 'http://localhost:8000';

  constructor(private http: HttpClient) { }

  login(user: any) {
    let endpoint = '/api/login';
    let url = this.host + endpoint;
    return this.http.post(url, user);
  }

  logout() {
    return true;
  }

  register(user: any) {
    let endpoint = '/api/register';
    let url = this.host + endpoint;
    console.log(user);
    return this.http.post(url, user);
  }
}
