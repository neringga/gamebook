import { Component, OnInit } from '@angular/core';
import { Observable, of, BehaviorSubject, Subject } from 'rxjs';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { map, groupBy, tap } from 'rxjs/operators';
import { NgbDate, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';

export class AddData {
  monthDay: number;
  name: string;
  timesSeen: number;

  constructor(monthday: number, name: string, timesSeen: number) {
    this.monthDay = monthday;
    this.name = name;
    this.timesSeen = timesSeen;
  }
}

@Component({
  selector: 'app-add-trends',
  templateUrl: './add-trends.component.html',
  styleUrls: ['./add-trends.component.scss']
})
export class AddTrendsComponent implements OnInit {
  public lineCharData2: ChartDataSets[] = [];
  public lineChartLabels2: Label[] = [];

  public lineChartOptions: ChartOptions = { responsive: true };
  public lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,0,0,0.3)',
    }
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';

  private maxMonthDay = 0;
  private show = false;


  hoveredDate: NgbDate;
  fromDate: NgbDate;
  toDate: NgbDate;

  constructor(calendar: NgbCalendar) {
    this.fromDate = calendar.getToday();
    this.toDate = calendar.getToday();
  }

  ngOnInit() {
    // this.getAddData().subscribe(console.error);
  }

  getAddData(): Observable<any> {
    return this.getAddDataFromServer().pipe(
      tap(this.fillMonthDayLabels),
      map(this.groupAddsByName),
      map(this.fillCharts)
      );

  }

  private fillMonthDayLabels = (addData: AddData[]) => {
    let maxMonthDay = 0;
    addData.map(d => {
      if (d.monthDay > maxMonthDay) {
        maxMonthDay = d.monthDay;
      }
    });

    const monthDays: Label[] = [];
    for (let i = 1; i <= maxMonthDay; i++) {
      monthDays.push(i.toString());
    }

    this.maxMonthDay = maxMonthDay;
    this.lineChartLabels2 = monthDays;
  }

  private groupAddsByName = (addData: AddData[]) => {
    const groupedData = addData.reduce((singleAddData, item) => {
      const addName = item.name;
      singleAddData[addName] = singleAddData[addName] || { name: addName, adds: []};
      singleAddData[addName].adds.push(item);
      return singleAddData;
    }, { });
    return groupedData;
  }

  private fillCharts = (groupedData: any) => {
    const chartData: ChartDataSets[] = [];

    Object.keys(groupedData).forEach(addName => {

      const dataForAdd: AddData[] = groupedData[addName].adds;
      dataForAdd.sort((a, b) => a.monthDay - b.monthDay);

      const timesSeenPerDay: number[] = [];
      for (let i = 1; i <= this.maxMonthDay; i++) {
        const addDataForThisDay = dataForAdd.filter(d => d.monthDay === i);
        if (addDataForThisDay.length === 0) {
          timesSeenPerDay.push(0);
        } else {
          const numberOfTimesSeen = addDataForThisDay
          .map(d => d.timesSeen)
          .reduce((sum, current) => sum + current);
          timesSeenPerDay.push(numberOfTimesSeen);
        }
      }

      const addDataSet: ChartDataSets = { label: addName, data: timesSeenPerDay };
      chartData.push(addDataSet);
    });
    this.lineCharData2 = chartData;
    this.show = true;
    console.error(chartData);
  }


  getAddDataFromServer(): Observable<AddData[]> {
    const adds: AddData[] = [
      new AddData(1, 'Reklama 1', 1), new AddData(2, 'Reklama 1', 2), new AddData(3, 'Reklama 1', 3), new AddData(4, 'Reklama 1', 5),
      new AddData(1, 'Reklama 2', 4), new AddData(2, 'Reklama 2', 5), new AddData(3, 'Reklama 2', 10), new AddData(4, 'Reklama 2', 14),
      new AddData(1, 'Reklama 3', 0), new AddData(2, 'Reklama 3', 2), new AddData(3, 'Reklama 3', 15), new AddData(4, 'Reklama 3', 12)
  ];
    return of(adds);
  }

  private loadChart(): void {
    this.getAddData().subscribe(console.error);
  }



  onDateSelection(date: NgbDate) {
    if (!this.fromDate && !this.toDate) {
      this.fromDate = date;
    } else if (this.fromDate && !this.toDate && date.after(this.fromDate)) {
      this.toDate = date;
      console.error(this.fromDate);
      console.error(this.toDate);
      this.loadChart(); // TODO add params
    } else {
      this.toDate = null;
      this.fromDate = date;
    }
  }

  isHovered(date: NgbDate) {
    return this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate);
  }

  isInside(date: NgbDate) {
    return date.after(this.fromDate) && date.before(this.toDate);
  }

  isRange(date: NgbDate) {
    return date.equals(this.fromDate) || date.equals(this.toDate) || this.isInside(date) || this.isHovered(date);
  }
}


