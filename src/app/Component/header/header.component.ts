import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isVisible = false;
  constructor() { }

  ngOnInit(): void {
    this.hamMenu(window);
  }
  @HostListener('window:resize', ['$event'])
  onResize(event){
    this.hamMenu(event.target);
   }
  hamMenu(event){
    const width = event.innerWidth;
     (width >= 1025) ? this.isVisible = true : this.isVisible = false;
   }
}
