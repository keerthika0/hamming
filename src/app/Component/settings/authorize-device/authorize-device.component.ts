import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../Shared/HttpServices';
import { NzMessageService } from 'ng-zorro-antd/message';
interface devices {
  datetime: string;
  browser: string;
  os: string;
  status: string;
}
@Component({
  selector: 'app-authorize-device',
  templateUrl: './authorize-device.component.html',
  styleUrls: ['./authorize-device.component.scss']
})
export class AuthorizeDeviceComponent implements OnInit {

  constructor(private httpservice: HttpService,private message: NzMessageService) { }

  authDevices = [];

  ngOnInit(): void {
    this.GetAuthDevices();
  }
  GetAuthDevices() {
    this.httpservice.showDevice().subscribe((data:any) => {
      console.log('device', data)
      this.authDevices = data&&data.data
        // if (data["success"]) {
        //     this.authDevices = data["data"];
        // }
    }); 
  }
  RemoveDevice(id, indx) {
    this.httpservice.deleteDevice({ id }).subscribe((data) => {
        if (data["success"]) {
            this.message.success(data["message"]);
            this.authDevices.splice(indx, 1);
            let newData = [...this.authDevices];
            this.authDevices = newData;
        } else {
            this.message.error(data["message"]);
        }
    });
}

}
