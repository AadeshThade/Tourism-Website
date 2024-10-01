import { Component } from '@angular/core';
// import { GatewayComponent } from './gateway/gateway.component';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';
import { FormGroup, FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router,  RouterOutlet, ActivatedRoute } from '@angular/router';
import { Email } from '../jsonn';

// import { Router } from '@angular/router';
declare var Razorpay: any;
@Component({
  selector: 'app-pay',
  standalone: true,
  imports: [CommonModule, NgbModule, HttpClientModule, FormsModule, ReactiveFormsModule, RouterOutlet],
  templateUrl: './pay.component.html',
  styleUrl: './pay.component.css'
})
export class PayComponent {
  pay: any = [];
  price: number = 0;
  loginForm: FormGroup 

  constructor(private router: Router, private http: HttpClient, private route: ActivatedRoute) {

    this.price = this.route.snapshot.params['price']

    this.loginForm = new FormGroup({
      fullName: new FormControl("aadesh", Validators.required),
      emailId: new FormControl("aadesh.1310t@gmail.com", Validators.required),
      mobNo: new FormControl("8767703356", [Validators.required, Validators.maxLength(10), Validators.minLength(10)]),
      addr: new FormControl("pune", Validators.required),
      cardNumber: new FormControl("987612345678", Validators.required),
      fromDate: new FormControl("", Validators.required),
      toDate: new FormControl("", Validators.required),
      expiryDate: new FormControl("", Validators.required),
      cvv: new FormControl("123", Validators.required),
      nameonCard: new FormControl("aadesh", Validators.required),
      totalAmt: new FormControl(this.price, [Validators.required]),
    })

  }
  


  
  // email:string=this.emailId;
  // body:string="Your booking is successfull with amount "+this.totalAmt;
  // subject:string="Payment Successful";
  emailContent: Email[] = []

  handleSubmit() {
    if (this.fullName.errors == null && this.emailId.errors == null && this.mobNo.errors == null && this.addr.errors == null && this.cardNumber.errors == null && this.expiryDate.errors == null && this.cvv.errors == null && this.totalAmt.errors == null && this.nameonCard.errors == null ) {
      
      this.http.post("http://localhost:5555/addpay", this.loginForm.value).subscribe(
        data => {
          this.pay = [data]
          Swal.fire({
            title: 'Successfull Payment',
            text: 'You clicked the button!',
            icon: 'success',
            confirmButtonText: 'OK'
          });
          this.sendEmail()
        },
        error => {
          alert("error")
          console.log(error);

        }
      )

      this.router.navigateByUrl('/destination')

      console.log({
        toEmail: this.emailId,
        body: "Your booking is successfull with amount " + this.totalAmt,
        subject: 'Payment Successful'
      });
    }
    else
      alert("Enter all form details")

  }

  sendEmail(){
    this.http.post("http://localhost:5555/addemaildata", {
      toEmail: this.emailId,
      body: "Your booking is successfull with amount " + this.totalAmt,
      subject: 'Payment Successful'
    }).subscribe(
        data => {
          console.log("Send mail. "+data);
        },
        error => {
          alert("error");
          console.log(error);
        }
      )
  }

  get fullName(): any {
    return this.loginForm.get('fullName')
  }
  get emailId(): any {
    return this.loginForm.get('emailId')
  }
  get mobNo(): any {
    return this.loginForm.get('mobNo')
  }
  get addr(): any {
    return this.loginForm.get('addr')
  }
  get cardNumber(): any {
    return this.loginForm.get('cardNumber')
  }
  get expiryDate(): any {
    return this.loginForm.get('expiryDate')
  }
  get cvv(): any {
    return this.loginForm.get('cvv')
  }
  get totalAmt(): any {
    return this.loginForm.get('totalAmt')
  }
  get nameonCard(): any {
    return this.loginForm.get('nameonCard')
  }
  payNow() {
    Swal.fire({
      title: 'Successfull Payment',
      text: 'You clicked the button!',
      icon: 'success',
      confirmButtonText: 'OK'
    });
  }

}
