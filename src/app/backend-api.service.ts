import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../environments/environment";
import {Observable, forkJoin} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BackendApiService {

  constructor(private httpClient: HttpClient){ }
  
    getHome(): Observable<any> {

      return this.httpClient.get<any>(`${environment.baseUrl}/home`);
      
      }
}
