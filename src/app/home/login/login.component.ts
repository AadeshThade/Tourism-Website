
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCard, MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule, MatToolbarModule, MatButtonModule, MatIconModule, MatCardModule, HttpClientModule],
})
export class LoginComponent {
  loginError: string = '';
  loginForm: FormGroup = new FormGroup({
    loginId: new FormControl("aadesh", Validators.required),
    pass: new FormControl("", Validators.required),
  })
  login: any = [];
  price: number = 0;
  constructor(private fb: FormBuilder, private router: Router, private http: HttpClient, private authService: AuthService, private route: ActivatedRoute) {
    this.price = this.route.snapshot.params['price']
   }

  handleSubmit() {

    const { loginId, pass } = this.loginForm.value;

    if (this.loginId.errors == null && this.pass.errors == null) {

      this.http.get(`http://localhost:5555/login-by-Id-Password/${loginId}/${pass}`).subscribe(
        user => {
          console.log(user);

          if (user != null ) {
            alert("login success")
            this.router.navigateByUrl(`/pay/${this.price}`)
            localStorage.setItem("User", loginId);

          } else {
            alert("invalid loginId and password")
          }
          this.login = [user]

        }
      )

    }
    else
      alert("Enter User ID and Passwords")

  }
  get loginId(): any {
    return this.loginForm.get('loginId')
  }
  get pass(): any {
    return this.loginForm.get('pass')
  }
}

