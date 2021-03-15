import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder, MinLengthValidator } from '@angular/forms';
import { Router } from '@angular/router';
import {HttpService} from '../../Shared/HttpServices';
import { NzMessageService } from 'ng-zorro-antd/message';
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  forgotPasswordForm: FormGroup;
  public error: string;

  constructor(private router: Router, private formBuilder: FormBuilder,private http:HttpService,private message: NzMessageService) { }
  
  ngOnInit(): void {

    this.forgotPasswordForm = this.formBuilder.group({

      email: ['', [Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
     
    });
  }
  onSubmit(form: FormGroup) {
  
    this.http.recoverPassword(this.forgotPasswordForm.value).subscribe((res:any)=>{
       console.log(res.message);
       if(res.success){
         res['success'] && this.message.success(res['message']);
         this.router.navigate(['signin']);
         form.reset();
       }else{
        this.router.navigate(['forgotPassword']);
       }
    },error =>{
      this.message.error(error.error.message);
    });
  }
}