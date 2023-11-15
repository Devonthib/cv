import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  callApi(paramsObj: { [key: string]: string }, jsonData?: any) {
    let params = new HttpParams();
    for (const key in paramsObj) {
      params = params.set(key, paramsObj[key]);
    }

    return this.http
      .get(`${environment.apiUrl}/fa-api`, {
        params,
        responseType: 'text' as 'json',
      })
      .pipe(
        catchError((error: HttpErrorResponse) => {
          // console.error('An error occurred:', error.error);
          return throwError(
            () => new Error('Something went wrong; please try again later.')
          );
        }),
        map((response: any) => {
          let result;
          try {
            result = JSON.parse(response);
          } catch (e) {
            result = response;
          }
          return result;
        })
      );
  }

  callApiPost(paramsObj: { [key: string]: string }, jsonData?: any) {
    let params = new HttpParams();
    for (const key in paramsObj) {
      params = params.set(key, paramsObj[key]);
    }

    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http
      .post(`${environment.apiUrl}/fa-api-post`, jsonData, {
        params,
        headers,
        responseType: 'text' as 'json',
      })
      .pipe(
        catchError((error: HttpErrorResponse) => {
          // console.error('An error occurred:', error.error);
          return throwError(
            () => new Error('Something went wrong; please try again later.')
          );
        }),
        map((response: any) => {
          let result;
          try {
            result = JSON.parse(response);
          } catch (e) {
            result = response;
          }
          return result;
        })
      );
  }


}
