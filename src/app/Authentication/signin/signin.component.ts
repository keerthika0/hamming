import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder, MinLengthValidator } from '@angular/forms';
import { Router } from '@angular/router';
import { NzButtonSize } from 'ng-zorro-antd/button';
import {HttpService} from '../../Shared/HttpServices';
import {AuthSerice} from '../../Shared/auth.service';
import { NzMessageService } from 'ng-zorro-antd/message';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {


  signinForm: FormGroup;
  public error: string;
  constructor(private router: Router,private http:HttpService,private auth:AuthSerice,private message: NzMessageService) { }
  size: NzButtonSize = 'large';
  ngOnInit(): void {
    this.signinForm = new FormGroup({
      email : new FormControl('',[ Validators.required,
                                     Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")
                                    ]
                               ),
       password : new FormControl('',[Validators.required,
                                   Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')
                                      ]
                                 ),                        
    })

  }
  onSubmit(form: FormGroup) {
    console.log("bala")
    console.log(this.signinForm.value.email);

    let val={
      email:this.signinForm.value.email,
      password:this.signinForm.value.password
    }

    this.http.logIn(val).subscribe((res:any)=>{
      console.log(res);
      if(res.success){
        this.auth.isLoggedIn=true;
        res['success'] && this.message.success(res['message']);
        this.router.navigate(['/components']);
        form.reset();
      }
      else{
        this.auth.isLoggedIn=false;
        this.router.navigate(['/signin']);
      }
    }, error => {
      this.message.error(error.error.message);
    });

    
   

  }

}



