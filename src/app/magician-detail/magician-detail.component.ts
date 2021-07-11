import { Component, OnInit,Input } from '@angular/core';
import {Magician} from '../magician';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { MagicianService } from '../magician.service';
import { RestService } from '../rest.service'

@Component({
  selector: 'app-magician-detail',
  templateUrl: './magician-detail.component.html',
  styleUrls: ['./magician-detail.component.css']
})
export class MagicianDetailComponent implements OnInit {
  magician: Magician | undefined;
  public magicianList: any = [];
  constructor(
    private route: ActivatedRoute,
    private magicianService: MagicianService,
    private location: Location,
    private RestServise:RestService
  ) { }

  ngOnInit() {
    this.getMagician();
    this.loadData();
  }

  getMagician():void{
    const id = this.route.snapshot.paramMap.get('name')!;
    console.log(id);
    this.magicianService.getMagician(id)
      .subscribe(magician => this.magician = magician);
  }
  goBack():void{
    this.location.back();
  }

  public loadData(){
    this.RestServise.get('http://hp-api.herokuapp.com/api/characters')
    .subscribe(response =>{
      this.magicianList=response;
    })
  }

}
