import { Component,HostListener, OnInit } from '@angular/core';
import { NzButtonSize } from 'ng-zorro-antd/button';
@Component({
  selector: 'app-addkey',
  templateUrl: './addkey.component.html',
  styleUrls: ['./addkey.component.scss']
})
export class AddkeyComponent implements OnInit {
  isVisible = false;
  constructor() { }
  size: NzButtonSize = 'large';
  ngOnInit(): void {
    this.hamMenu(window);
  }
  @HostListener('window:resize', ['$event'])
  onResize(event){
    this.hamMenu(event.target);
  }
hamMenu(event){
 const width = event.innerWidth;
 (width <= 1025) ? this.isVisible = true : this.isVisible = false;
}
}
