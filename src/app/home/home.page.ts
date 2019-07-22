import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  users: any[];

  constructor(public http: Http) {
    this.getData();
  }
  getData() {
    this.http.get('http://jsonplaceholder.typicode.com/users').subscribe(
      data => {
        console.log(data.json());
        this.users = data.json();
      },
      error => {
        console.log(error);
      }
    );
  }
}
