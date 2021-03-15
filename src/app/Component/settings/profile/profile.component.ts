import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzButtonSize } from 'ng-zorro-antd/button';
import {HttpService} from '../../../Shared/HttpServices';
import { NzMessageService } from 'ng-zorro-antd/message';
import { countries } from "./countries.js";
const userList = ['A'];
const colorList = ['#00bcc7'];
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  size: NzButtonSize = 'large';
  countryList: { name: string; code: string }[] = countries;
  // submitForm(): void {
  //   console.log(this.ProfileForm.value);
  // }
  constructor(private router: Router,
    private http: HttpService,
    private message: NzMessageService
  ) { }

  ProfileForm: FormGroup;

  ngOnInit(): void {
   this.ProfileForm = new FormGroup({
    date : new FormControl('',Validators.required),
    mobile : new FormControl('',[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
    address :new FormControl('',[Validators.required, Validators.minLength(20), Validators.maxLength(50)]),
    country : new FormControl('',Validators.required),
    zipcode : new FormControl('',[Validators.required,Validators.pattern("^[a-zA-Z0-9\s]{0,10}$")])
   })
  }
  Profile(form: FormGroup){
    let val={
      date:this.ProfileForm.value.date,
      mobile:this.ProfileForm.value.mobile,
      address:this.ProfileForm.value.address,
      country:this.ProfileForm.value.country,
      zipcode:this.ProfileForm.value.zipcode
    }

    this.http.ProfileForm(val).subscribe((res:any)=>{
      console.log(res);
      res['success'] && this.message.success(res['message']);
    },error =>{
      this.message.error(error.error.message)
    }
    )
  }

  disabledDate = (current: Date): boolean => {
    var date = new Date();
    date.setFullYear(date.getFullYear() - 18);
    return current > date;
};
   
  text: string = userList[0];
  color: string = colorList[0];
  gap = 0;

}
