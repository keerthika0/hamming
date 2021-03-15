import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder, AbstractControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../../Shared/HttpServices';
import { NzMessageService } from 'ng-zorro-antd/message';
@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  constructor(private router: Router, private httpservice: HttpService,private route:ActivatedRoute,private message: NzMessageService) { }
  public error: string;

  resetPassword = new FormGroup({
      password: new FormControl(null, [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]),
      confirmPassword: new FormControl(null, [Validators.required]),
  })

  reset() {
    let id=this.route.snapshot.paramMap.get('id');
    let val={
      password:this.resetPassword.value.password,
      confirmPassword:this.resetPassword.value.confirmPassword
    }
    this.httpservice.resetPassword(id,val).subscribe((res:any)=>{
       console.log(res.message);
       if(res.success){
        res['success'] && this.message.success(res['message']);
        this.router.navigate(['signin']);
        this.resetPassword.reset();
      }else{}
    },error =>{
      this.message.error(error.error.message);
    });
  }
  
  ngOnInit(): void {
  // console.log()
  }

}
