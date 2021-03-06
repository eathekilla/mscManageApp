import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';

import { Magician } from '../magician';
import { MagicianService } from '../magician.service';
@Component({
  selector: 'app-magician-search',
  templateUrl: './magician-search.component.html',
  styleUrls: ['./magician-search.component.css']
})
export class MagicianSearchComponent implements OnInit {
  magician$!: Observable<Magician[]>
  private searchTerms = new Subject<string>();
  constructor(private magicianService: MagicianService) { }

  search(term:string):void{
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.magician$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.magicianService.searchMagician(term)),
    );
  }

}
