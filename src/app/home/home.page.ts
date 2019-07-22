import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  weatherInfo: any = {};
  cityName = 'London';

  constructor(public http: Http, public loadingCtrl: LoadingController) {
    this.getData();
  }
  async getData() {
    let loading = await this.loadingCtrl.create();
    loading.present();
    
    this.http
      .get(
        'http://api.openweathermap.org/data/2.5/weather?q=' +
          this.cityName +
          '&id=524901&APPID=3c9b6353b98f4955c12a6286f191da79'
      )
      .subscribe(
        data => {
          console.log(data.json());
          this.weatherInfo = data.json();
          loading.dismiss();
        },
        error => {
          console.log(error);
          loading.dismiss();
        }
      );
  }
}
