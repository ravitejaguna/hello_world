import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BackendApiService } from "../app/backend-api.service"


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello-world-app';
  constructor(private backendApiService: BackendApiService,) {}
  clickHome() { this.backendApiService.getHome().subscribe(response => {
    console.log(response);
    });}
}

