import { Component, OnInit } from '@angular/core';
import { RestService } from './rest.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Magician School';
  constructor(private RestServise:RestService){

  }
  ngOnInit(){
  }
  
}
