import { Injectable } from '@angular/core';
import{Magician} from './magician';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class MagicianService {
  private log(message: string) {
    this.messageService.add(`MagicianService: ${message}`);
  };
  private magiciansUrl = 'http://hp-api.herokuapp.com/api/characters';
  constructor(private http:HttpClient, private messageService: MessageService) { }
  getMagicians(): Observable<Magician[]>{
    return this.http.get<Magician[]>(this.magiciansUrl).pipe(
      tap(_ => this.log('fetched magicians')),
      catchError(this.handleError<Magician[]>('getMagician',[])));
  }

  getMagician(name: string): Observable<Magician> {
    const url = '${this.magiciansUrl}/$name}';
    return this.http.get<Magician>(url)
    .pipe(tap(_ => this.log('fetched magician name=${name}'))
    ,catchError(this.handleError<Magician>('getMagician name=${name}')));
  }

  searchMagician(term: string): Observable<Magician[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Magician[]>(`${this.magiciansUrl}/?name=${term}`).pipe(
      tap(x => x.length ?
         this.log(`found magicians matching "${term}"`) :
         this.log(`no magicians matching "${term}"`)),
      catchError(this.handleError<Magician[]>('searchMagician', []))
    );
  }




  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
} 
