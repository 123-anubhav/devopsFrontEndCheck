import { Component } from '@angular/core';
import { RestIntegrationService } from './rest-integration.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngTest01';

  constructor(private service: RestIntegrationService) { }

  fetchDataComp() {
    this.service.fetchData().subscribe(res => {
      alert("response of rest api is : " + res)
      
    }, err => {
      alert("error of rest call is: " + err)
    });
  }
}
