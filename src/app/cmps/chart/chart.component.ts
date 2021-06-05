import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { BitcoinService } from 'src/app/services/bitcoin.service';
import { Router } from '@angular/router';
import {
  ChartErrorEvent,
  ChartMouseLeaveEvent,
  ChartMouseOverEvent,
  ChartSelectionChangedEvent,
  ChartType,
  Column,
  GoogleChartComponent
} from 'angular-google-charts';
import { Subscription } from 'rxjs'


@Component({
  selector: 'chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

  public charts: {
    title: string;
    type: ChartType;
    data: any;
    columns?: Column[];
    options?: {};
  }[] = [];

  width = 600
  subscription: Subscription
  marketPrice: any = []

  @ViewChild('chart', { static: true })
  public chart!: GoogleChartComponent;

  constructor(private router: Router, private bitcoinService: BitcoinService) { }

  public onError(error: ChartErrorEvent) {
    console.error('Error: ' + error.message.toString());
  }

  public onSelect(event: ChartSelectionChangedEvent) {
    console.log('Selected: ' + event.toString());
  }

  public onMouseEnter(event: ChartMouseOverEvent) {
    console.log('Hovering ' + event.toString());
  }

  public onMouseLeave(event: ChartMouseLeaveEvent) {
    console.log('No longer hovering ' + event.toString());
  }

  ngOnInit() {
    this.subscription = this.bitcoinService.getMarketPrice().subscribe(res => {
      this.charts.push({
        title: 'Styled Line Chart',
        type: ChartType.ColumnChart,
        columns: [
          'Month',
          'Price'
        ],
        data: res
      });
    })
  }

  public navigateToTest() {
    this.router.navigateByUrl('/test');
  }

}
