import { Component, OnInit } from '@angular/core';
interface devices {
  datetime: string;
  notes: string;
  ip: string;
  location: string;
}
@Component({
  selector: 'app-activity-log',
  templateUrl: './activity-log.component.html',
  styleUrls: ['./activity-log.component.scss']
})
export class ActivityLogComponent {
  constructor() { }

  activityLogs: devices[] = [
    {
      datetime: '1/4/21, 11:33 AM',
      notes: 'Loggned in',
      ip: '182.72.168.142',
      location: 'Chennai,IN'
    },
    {
      datetime: '1/4/21, 11:33 AM',
      notes: 'Loggned in',
      ip: '182.72.168.142',
      location: 'Chennai,IN'
    },
  ];
}