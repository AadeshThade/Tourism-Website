import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticated = false;

  constructor(private router: Router) {}

  // Simulate login by setting isAuthenticated to true
  login(loginId: string, pass: string): boolean {
    // In a real application, you'd make an HTTP request to the backend here.
    // For this example, we'll just simulate successful login.
    if (loginId === 'user' && pass === 'password') {
      this.isAuthenticated = true;
      localStorage.setItem('isAuthenticated', 'true');
      return true;
    }
    return false;
  }

  // Simulate logout by setting isAuthenticated to false
  logout(): void {
    this.isAuthenticated = false;
    localStorage.removeItem('isAuthenticated');
    this.router.navigate(['/login']);
  }

  // Check whether the user is authenticated
  isLoggedIn(): boolean {
    return this.isAuthenticated || localStorage.getItem('isAuthenticated') === 'true';
  }
}
