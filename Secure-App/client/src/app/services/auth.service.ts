import { Injectable } from '@angular/core';
import { environment } from '../environments/environment.development';
import { map, Observable } from 'rxjs';
import { LoginRequest } from '../interfaces/login-request';
import { AuthResponse } from '../interfaces/auth-response';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl: string = environment.apiUrl;
  private tokenKey = 'token';

  constructor(private http: HttpClient) { }

  login(data:LoginRequest):Observablele<AuthResponsense> {
    this.http.post<AuthResponse>(`${this.apiUrl}/account/login`, data)
    .pipe(
      map((response) => {
        if (response.isSuccess) {
          localStorage.setItem(this.tokenKey, response.token);
        }
        return response;
      })
    )
  }
}
