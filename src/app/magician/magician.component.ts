import { Component, OnInit } from '@angular/core';
import {Magician} from '../magician';
import { MagicianService } from '../magician.service';
import { MessageService } from '../message.service';
@Component({
  selector: 'app-magician',
  templateUrl: './magician.component.html',
  styleUrls: ['./magician.component.css']
})
export class MagicianComponent implements OnInit {
  magicians: Magician []=[];
  constructor(private magicianService: MagicianService) { }

  ngOnInit() {
    this.getMagicians();
    
  }
  getMagicians(): void{
    this.magicianService.getMagicians().subscribe(magicians => this.magicians = magicians);
  }


}
