import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'The Dating App';
  users: any;

  constructor(private http: HttpClient) {}

  // this req will be completed because it is an http req
  ngOnInit() {
    this.getUsers();
  }
  getUsers() {
    this.http.get('https://localhost:5001/api/users').subscribe(
      response => {
        this.users = response;
      },
      (error) => {
        console.log(error);
      })
  }
}
