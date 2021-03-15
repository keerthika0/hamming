import { Component, HostListener, OnInit } from '@angular/core';
declare const TradingView: any;

@Component({
  selector: 'app-smarttrade',
  templateUrl: './smarttrade.component.html',
  styleUrls: ['./smarttrade.component.scss']
})
export class SmarttradeComponent implements OnInit {
  isVisible = false;
  constructor() { }
  visibleBuy = false;
  visibleSell = false;
  childrenVisible = false;
  selectCoin = null;
  public isMenuCollapsed = true;
  profit = false;
  trailing = false;
  stopLoss = false;
  visibleviewbalance=false;

  ngOnInit(): void {
    this.hamMenu(window);
    new TradingView.widget({
      autosize: true,
      interval: "15",
      theme: "light",
      container_id: "tvchart",
      studies: [],
      width: "100%",
      height: "610",
      symbol: "BINANCE:BTCUSDT",
      timezone: "exchange",
      style: "1",
      toolbar_bg: "#f1f3f6",
      withdateranges: false,
      hide_side_toolbar: true,
      hide_top_toolbar: false,
      allow_symbol_change: true,
      save_image: false,
      show_popup_button: false,
      locale: "en",
    });
  }



  value(val) {
    this.selectCoin = val;
    new TradingView.widget(
      {
        "autosize": true,
        "symbol": "BINANCE:" + this.selectCoin,
        "interval": "5",
        "timezone": "Asia/Kolkata",
        "theme": "Light",
        "style": "1",
        "locale": "in",
        "toolbar_bg": "#f1f3f6",
        "enable_publishing": false,
        "allow_symbol_change": true,
        "studies": [
          "AwesomeOscillator@tv-basicstudies",
          "MACD@tv-basicstudies",
          "RSI@tv-basicstudies"
        ],
        "container_id": "tvchart"
      });

  }
  open_viewbalance(): void {
    console.log('viewbalance')
    this.visibleviewbalance = true;
  }
  close_viewbalance(): void {
    console.log('viewbalance')
    this.visibleviewbalance = false;
  }
  
  open_buy(): void {
    console.log('openbuy')
    this.visibleBuy = true;
  }

  close_buy(): void {
    console.log('opensell')
    this.visibleBuy = false;
  }

  openChildren_buy(): void {
    this.childrenVisible = true;
  }
  closeChildren_buy(): void {
    this.childrenVisible = false;
  }

  open_sell(): void {
    console.log('sell')
    this.visibleSell = true;
  }
  close_sell(): void {
    this.visibleSell = false;
  }
  openChildren_sell(): void {
    this.childrenVisible = true;
  }
  closeChildren_sell(): void {
    this.childrenVisible = false;
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
