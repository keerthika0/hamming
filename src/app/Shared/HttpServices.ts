import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Constant } from './Contants';
@Injectable({ providedIn: 'root' })
export class HttpService {
  constructor(private http: HttpClient) { }

  signUp(val) {
    return this.http.post<HttpService>(Constant.signUp, val);
  }

  logIn(val) {

    return this.http.post(Constant.login, val);
  }



  resendEmail(val: any) {
    return this.http.post(Constant.resendEmail, val);
  }


  recoverPassword(val: any) {
    return this.http.post(Constant.recoverPassword, val);
  }

  getUser() {

    return this.http.get(Constant.getUser)

  }

  detailUpdate(val) {
    return this.http.patch(Constant.detailsUpdate, val);
  };

  logout() {
    return this.http.get(Constant.logOut);
  }

  resetPassword(id,val){
    return this.http.post(Constant.resetPassword+id,val);
  }

  ProfileForm(val){
    return this.http.post<HttpService>(Constant.ProfileForm, val);
  }
  securityForm(val){
    return this.http.post<HttpService>(Constant.securityForm,val);
  }
  apiKeyForm(val){
    return this.http.put<HttpService>(Constant.apiKeyForm,val);
  }
  showDevice(){
    return this.http.get<HttpService>(Constant.showDevice,);
  }
  deleteDevice(id){
    return this.http.delete<HttpService>(Constant.deleteDevice+id);
  }
}
