import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  weatherInfo: any = {};

  constructor(public http: Http) {
    this.getData();
  }
  getData() {
    this.http.get('http://api.openweathermap.org/data/2.5/weather?q=london&id=524901&APPID=3c9b6353b98f4955c12a6286f191da79').subscribe(
      data => {
        console.log(data.json());
        this.weatherInfo = data.json();
      },
      error => {
        console.log(error);
      }
    );
  }
}
