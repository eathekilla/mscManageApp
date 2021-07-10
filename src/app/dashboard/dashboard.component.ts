import { Component, OnInit } from '@angular/core';
import { Magician } from '../magician';
import { MagicianService } from '../magician.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  magicians: Magician[] = [];

  constructor(private magicianService: MagicianService) { }

  ngOnInit() {
    this.getMagicians();
  }

  getMagicians(): void {
    this.magicianService.getMagicians().subscribe(magicians => this.magicians = magicians.slice(1, 5));
    
  }
}