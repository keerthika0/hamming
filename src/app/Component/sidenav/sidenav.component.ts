import { Component,HostListener, OnInit } from '@angular/core';
import { NzDrawerPlacement } from 'ng-zorro-antd/drawer';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  constructor() { }
  public isMenuCollapsed: boolean = false;
  ngOnInit(): void {
    this.hamMenu(window)
  }
  isShow = false;
  visible = false;
  placement: NzDrawerPlacement = 'left';
  open(): void {
    this.visible = true
  }
  close(): void {
    this.visible = false;
  }
  @HostListener('window:resize', ['$event'])
  onResize(event){
    this.hamMenu(event.target)
   }
  hamMenu(event){
  console.log("works")
  const width = window.innerWidth;
 (width >= 1025) ? this.isShow = false  : this.isShow = true;

}
}