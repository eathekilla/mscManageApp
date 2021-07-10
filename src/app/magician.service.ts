import { Injectable } from '@angular/core';
import{Magician} from './magician';
import { MAGICIANS } from './mock-magicians';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Injectable({
  providedIn: 'root'
})
export class MagicianService {

  constructor(private messageService: MessageService) { }
  getMagicians(): Observable<Magician[]>{
    const magicians = of(MAGICIANS);
    this.messageService.add('MagicianService: fetched magicians');
    return magicians;
  }

  getMagician(id: number): Observable<Magician> {
    const magician = MAGICIANS.find(h => h.id === id)!;
    this.messageService.add(`MagicianService: fetched magician id=${id}`);
    return of(magician);
  }
}
