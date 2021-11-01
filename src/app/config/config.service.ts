import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

import { Observable, of, throwError } from 'rxjs';
import { catchError, delay, retry, tap } from 'rxjs/operators';
import { IAppConfig } from './config.model';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  static settings: IAppConfig;
  jsonFile = `assets/config/config.${environment.appcode}.${environment.name}.json`;

  httpOptions = {
    headers: new HttpHeaders({
      'content-type': 'application/json'
    })
  };

  constructor(private http: HttpClient) {
  }

  getConfig(): Observable<any> {
    return this.http.get<IAppConfig>(this.jsonFile)
    .pipe(
      tap(value => ConfigService.settings = value),
      retry(1),
      catchError(this.handleError)
    );
  }

 // Error handling
 handleError(error: { error: { message: string; }; status: any; message: any; }): any {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
