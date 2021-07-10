import { Component, OnInit,Input } from '@angular/core';
import {Magician} from '../magician';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { MagicianService } from '../magician.service';

@Component({
  selector: 'app-magician-detail',
  templateUrl: './magician-detail.component.html',
  styleUrls: ['./magician-detail.component.css']
})
export class MagicianDetailComponent implements OnInit {
  magician: Magician | undefined;
  constructor(
    private route: ActivatedRoute,
    private magicianService: MagicianService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getMagician();
  }

  getMagician():void{
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.magicianService.getMagician(id).subscribe(magician =>this.magician=magician);
  }
  goBack():void{
    this.location.back();
  }

}
