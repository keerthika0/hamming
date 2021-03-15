import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators,FormBuilder, MinLengthValidator} from '@angular/forms';
import { Router } from '@angular/router';
import {HttpService} from '../../Shared/HttpServices';
import { NzMessageService } from 'ng-zorro-antd/message';
@Component({
  selector: 'app-email-verification',
  templateUrl: './email-verification.component.html',
  styleUrls: ['./email-verification.component.scss']
})
export class EmailVerificationComponent implements OnInit {

  emailVerificationForm : FormGroup;
  constructor(private router:Router,private formBuilder: FormBuilder,private http:HttpService,private message: NzMessageService) { }
  public error: string;
  ngOnInit(): void {
    this.emailVerificationForm = this.formBuilder.group({
      
      email : ['',[Validators.required,
        Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      });

  }
  onSubmit(form: FormGroup) {
  
    let val={
      email:this.emailVerificationForm.value
    }
    this.http.resendEmail(this.emailVerificationForm.value).subscribe((res:any)=>{
      console.log(res.message);
      if(res.success){
        res['success'] && this.message.success(res['message']);
        this.router.navigate(['signin']);
        form.reset();
      }else{
        this.router.navigate(['emailVerification']);
      }
    },error =>{
      this.message.error(error.error.message);
    });
  }

}
