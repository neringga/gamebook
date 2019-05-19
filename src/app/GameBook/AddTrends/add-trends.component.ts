import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { map, groupBy, tap } from 'rxjs/operators';


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
  public lineChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
    { data: [10, 20, 10 ], label: 'Series B' },
  ];
  

  // public lineChartData: Observable<ChartDataSets[]>;

  public lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartOptions: (ChartOptions) = {
    responsive: true,
  };
  public lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,0,0,0.3)',
    },
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartPlugins = [];

  constructor() { }

  ngOnInit() {
    this.getAddData().subscribe(console.error);
  }

  getAddData(): Observable<any> {
    return this.getAddDataFromServer().pipe(
      map(
        this.groupAddsByName,
        this.transformToChartDataFormat));

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

  private transformToChartDataFormat = (groupedData: {}) => {
    const groupedDataArr: {addName: string, addData: AddData}[] = [];
    for (var property in groupedData) {
      if (groupedData.hasOwnProperty(property)) {
        groupedDataArr.push(groupedData[property]);
          // do stuff
      }
    }
    return groupedDataArr;
  }

  getAddDataFromServer(): Observable<AddData[]> {
    const adds: AddData[] = [
      new AddData(1, 'Reklama 1', 1), new AddData(2, 'Reklama 1', 2), new AddData(3, 'Reklama 1', 3),
      new AddData(1, 'Reklama 2', 4), new AddData(2, 'Reklama 2', 5), new AddData(3, 'Reklama 2', 10),
      new AddData(1, 'Reklama 3', 0), new AddData(2, 'Reklama 3', 2), new AddData(3, 'Reklama 3', 15)
  ];
    return of(adds);
  }

}


