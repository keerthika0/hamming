import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from '../../Shared/HttpServices';

import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-signup-email',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupEmailComponent implements OnInit {

  constructor(private router: Router, private httpservice: HttpService,private message: NzMessageService) { }
  public check:boolean;
 
  public error: string;
  isLoginMode = true;
  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;

  }

  signUp = new FormGroup({
    user: new FormGroup({
      userName: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(20), Validators.pattern('^[a-zA-Z ]*$')]),
      email: new FormControl(null, [Validators.required, Validators.email, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")])
    }),
    passWord: new FormGroup({
      password: new FormControl(null, [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]),
      confirmPassword: new FormControl(null, [Validators.required,  Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]),
    },{
          // validators: ConfirmeValidator('password','confirmPassword')
    }),

  })

  sign() {

    let val = {
      name: this.signUp.get('user.userName').value,
      email: this.signUp.get('user.email').value,
      password: this.signUp.get('passWord.password').value,
      confirmPassword: this.signUp.get('passWord.confirmPassword').value
     
    }

      
    this.httpservice.signUp(val).subscribe((res:any)=>{
      console.log(res.message);
      if(res.success){
        res['success'] && this.message.success(res['message']);
        this.router.navigate(['singnupEmail'])
        this.signUp.reset();
      }else{}
    },error =>{
      this.message.error(error.error.message);
    })
    
  }

  ngOnInit(): void {

  }
  showDiv = {
    previous: true,
    current: false,
    next: true
  }
}




// this.httpservice.signUp(val).subscribe((res: any) => {
    //   console.log('inside http')
    //   this.message = res.message;
    //   console.log(res.message);
    //   this.toastService.show(this.message);

    // },error => {
    //   this.toastService.show(error.error.message);
    // });

    // this.httpservice.signUp(val).subscribe((res: any) => {
    //   console.log('inside http')
    //   this.message = res.message;
    //   console.log(res.message);
    //   this.toastService.show(this.message);

    // },error => {
    //   this.toastService.show(error.error.message);
    // });