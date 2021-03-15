import { Component, OnInit, } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder, MinLengthValidator } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Router } from '@angular/router';
import { HttpService } from '../../../Shared/HttpServices';
import { NzButtonSize } from 'ng-zorro-antd/button';
@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.scss']
})
export class SecurityComponent implements OnInit {

  randomUserUrl = 'https://api.randomuser.me/?results=10';
  optionList: string[] = [];
  selectedUser = null;
  isLoading = false;
  selectedLanguage = "English";
  languages = [
    { name: "English", value: "en" },
    { name: "Spanish", value: "es" },
    { name: "Chinese", value: "zh" },
    { name: "Hindi", value: "hi" },
    { name: "Russian", value: "ru" },
    { name: "Arabic", value: "ar" },
    { name: "Romanian", value:"rom"},
    { name: "Portuguese", value:"por"},
  ];
  constructor(private router: Router, private http: HttpService, private message: NzMessageService) { }

  
  securityForm: FormGroup;

  public show: boolean = false;
  public emailcontent: boolean = false;

  size: NzButtonSize = 'large';
  Emailsize: NzButtonSize = 'default';
  Emailenable: NzButtonSize = 'large';
  googleEnable: NzButtonSize = 'large';

  //switch boolean expression
  googleAuthSwitch = false;
  emailAuthSwitch = false;

  // //smarttradeApi modal
  isVisible = false;
  isOkLoading = false;
  showModal(): void {
    this.isVisible = true;
  }
  handleOk(): void {
    this.isOkLoading = true;
    setTimeout(() => {
      this.isVisible = false;
      this.isOkLoading = false;
    }, 3000);
  }

  handleCancel(): void {
    this.isVisible = false;
  }
  //end of smartradeApi

  //second modal
  smarttradeApi(): void {
    this.isVisible = true;
    
  }
  secretApi(){
    nzCancelText: 'Cancel';
    this.isVisible = false;
  }
  //end ofsecond modal
  showDiv = {
    previous: true,
    current: false,
    next: true
  }


  ngOnInit(): void {
    this.securityForm = new FormGroup({
      oldPassword: new FormControl('', [Validators.required, Validators.pattern("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}")]),
      password: new FormControl('', [Validators.required, Validators.pattern("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}")]),
      confirmPassword: new FormControl('', [Validators.required, Validators.pattern("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}")])
    })

  }
  emailVerifyForm = new FormGroup({
    verify: new FormGroup({
      emailVerificationCode: new FormControl('',[Validators.required, Validators.minLength(5)]),
    })
    
  })

  apiKeyForm = new FormGroup({
    api: new FormGroup({
      apiKey: new FormControl('',[Validators.required, Validators.minLength(5)]),
      secretKey: new FormControl('',[Validators.required,Validators.minLength(5)])
    })
  })

  

  onSubmit(from: FormGroup) {
    let val = {
      oldPassword: this.securityForm.value.oldPassword,
      password: this.securityForm.value.password,
      confirmPassword: this.securityForm.value.confirmPassword
    }
    this.http.securityForm(val).subscribe((res: any) => {
      console.log(res);
      if (res.success) {
        res['success'] && this.message.success(res['message']);
        this.router.navigate(['/signin']);
        this.securityForm.reset();
        
      } else {
      }
    }, error => {
      this.message.error(error.error.message);
    }
    )
  }
  emailVerifySubmit(){
    let val ={
      emailVerificationCode:this.emailVerifyForm.get('verify.emailVerificationCode')

    }
  }

  apiKeySubmit(){
    let val = {
      "binanceKey":{
        apiKey: this.apiKeyForm.get('api.apiKey').value,
        secretKey: this.apiKeyForm.get('api.secretKey').value
      }
      
    }
    this.http.apiKeyForm(val).subscribe((res:any)=>{
      console.log(res.message);
      if(res.success){
        res['success'] && this.message.success(res['message']);
        this.apiKeyForm.reset();
        this.isVisible = false;
        
      }else{
          this.isVisible = true
      }
    },error =>{
      this.message.error(error.error.message);
    })
  }
  toggle() {
    this.show = !this.show;
  }
  emailtoggle() {
    this.emailcontent = !this.emailcontent;
  }
}
