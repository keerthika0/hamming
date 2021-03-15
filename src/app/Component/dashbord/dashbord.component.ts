import { Component,HostListener, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip, SingleDataSet } from 'ng2-charts';
import { HttpService } from '../../Shared/HttpServices';
// import { single } from './data';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.scss']
})
export class DashbordComponent implements OnInit {
  // http: any;

  public isMenuCollapsed: boolean = false;
  isShown = false;

  // constructor() { }

  // constructor(private http:HttpService) {
  //   // Object.assign(this, { single });
  // }

  ngOnInit(): void {
    this.hamMenu(window)
  }

  public pieChartOptions: ChartOptions = {
    legend: {
      position: 'right',
      labels: {
        fontSize: 15,
        usePointStyle: true,
        boxWidth: 5
      }
    },
    responsive: true,

  };

  public piechartColors: any[] = [
    {
      backgroundColor: ["#00BCC7", "#37353D", "#F72A63"]
    }
  ];

  public pieChartLabels: Label[] = ['BTC', 'ETH', 'Others'];
  public pieChartData: SingleDataSet = [300, 500, 100];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];

  constructor() {
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
  }

  public barChartLabels: Label[] = ['30', '29', '28', '27', '26', '25', '24', '23', '22', '21', '20', '19', '18', '17', '16', '15', '14', '13', '12', '11', '10', '9', '8', '7', '6', '5', '4', '3', '2', '1'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      xAxes: [
        {
          ticks: {
            fontFamily: "'Google Sans'",
            beginAtZero: true
          },

          gridLines: {
            display: false,
            tickMarkLength: 1
          },
        }
      ],
      yAxes: [
        {
          ticks: {
            display: false,
            beginAtZero: true
          },
          gridLines: {
            display: false
          }
        }
      ]
    },
    legend: {
      display: false,
    },
    plugins: {
      datalabels: {
        display: false
      }
    }
  };

  public barChartData: ChartDataSets[] = [
    {
      data: [0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2],
      barPercentage: 0.5,
      barThickness: 20,
      maxBarThickness: 25,
      backgroundColor: '#F0F0F0',
      hoverBackgroundColor: "#00bbc6",
      categoryPercentage: 0.5
    },
  ];
  @HostListener('window:resize', ['$event'])
  onResize(event){
    this.hamMenu(event.target)
   }
  hamMenu(event){
   const width = event.innerWidth;
    (width <= 1025) ? this.isShown = true : this.isShown = false;
  }
}
