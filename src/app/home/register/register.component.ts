import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,CommonModule,HttpClientModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  reg:any=[]
  constructor(private fb: FormBuilder, private router: Router,private http:HttpClient) {}
  
  loginForm:FormGroup=new FormGroup({
  
    firstname:new FormControl("Aadesh",Validators.required),
    lastname:new FormControl("Thade",Validators.required),
    dob:new FormControl("",Validators.required),
    gender:new FormControl("male",Validators.required),
    emailId:new FormControl("",Validators.required),
    mobNo:new FormControl("",[Validators.required,Validators.maxLength(10),Validators.minLength(10) ]),
    address:new FormControl("Pune,Maharashtra",Validators.required),
    pass:new FormControl("",Validators.required),
    loginId:new FormControl("",Validators.required),
    
  })
  handleSubmit(){
    if(this.firstname.errors==null &&
      this.lastname.errors==null &&
      this.dob.errors==null &&
      this.gender.errors==null &&
      this.emailId.errors==null &&
      this.mobNo.errors==null &&
      this.address.errors==null &&
      this.pass.errors==null &&
      this.loginId.errors==null
    ){

      Swal.fire({
        title: 'Successfull Registration',
        text: 'You clicked the button!',
        icon: 'success',
        confirmButtonText: 'OK'
      });
        this.http.post("http://localhost:5555/addcustomdetails",this.loginForm.value).subscribe(
          data=>{
            this.reg=[data]
          },
          error=>{
            alert("error")
            console.log(error);
            
          }
        )
        this.router.navigateByUrl('/destination')
    }
    else
    alert("Enter all form details")
      
}
get firstname():any{
  return this.loginForm.get('firstname')
}
get lastname():any{
  return this.loginForm.get('lastname')
}
get dob():any{
  return this.loginForm.get('dob')
}
get emailId():any{
  return this.loginForm.get('emailId')
}
get mobNo():any{
  return this.loginForm.get('mobNo')
}
get address():any{
  return this.loginForm.get('address')
}
get pass():any{
  return this.loginForm.get('pass')
}
get loginId():any{
  return this.loginForm.get('loginId')
}
get gender():any{
  return this.loginForm.get('gender')
}
}
