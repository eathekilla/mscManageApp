import { Component, OnInit } from '@angular/core';
import { Magician } from '../magician';
import { MagicianService } from '../magician.service';
import { MagicianSearchComponent } from '../magician-search/magician-search.component';
import { Observable, Subject } from 'rxjs';
import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  magicians: Magician[] = [];
  magicianhouses: String [] = ["Gryffindor","Slytherin","Hufflepuff","Ravenclaw"];
  constructor(private magicianService: MagicianService) { }

  ngOnInit() {
    this.getMagicians();
  }

  getMagicians(): void {
    this.magicianService.getMagicians().subscribe(magicians => this.magicians = magicians.slice(1, 5));
    
  }

  housesMagician(){
    
  }
  
  
}