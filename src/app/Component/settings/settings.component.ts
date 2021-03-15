import { Component, OnInit,HostListener } from '@angular/core';
import { NzTabPosition } from 'ng-zorro-antd/tabs';
import { ActivatedRoute, Router } from "@angular/router";
const tabs = ["profile", "security", "activity", "auth-device"];
@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  isVisible = false;
  nzTabPosition: NzTabPosition = 'left';
  nzAnimated = false;
  
  tabIndex = 0;
  
  constructor( private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    
    // const page = this.route.snapshot.paramMap.get("id");
    // if (page) {
    //   if (tabs.includes(page)) {
    //     this.tabIndex = tabs.indexOf(page);
    //   } else {
    //     this.router.navigate["/settings/profile"];
    //   }
    // } else {
    //   this.router.navigate["/settings/profile"];
    // }
    this.TabPosition(window);
    this.hamMenu(window);
   }
  

  @HostListener("window:resize", ["$event"])
  onResize(event) {
    this.TabPosition(event.target);
    this.hamMenu(event.target);
  }

  TabPosition(event) {
    const innerWidth = event.innerWidth;

    if (innerWidth <= 767) {
      this.nzTabPosition = "top";
    } else {
      this.nzTabPosition = "left";
    }
  }
  hamMenu(event){
    const width = event.innerWidth;
    (width <= 1025) ? this.isVisible = true : this.isVisible = false;
  }
  // Route(tab) {
  //   if (tabs.includes(tab)) {
  //     this.router.navigate(["/settings/" + tab]);
  //   }
  // }
}
