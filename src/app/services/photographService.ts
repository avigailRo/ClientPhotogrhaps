import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Card } from '../models/card';


@Injectable()
export class PhotographService {
    Url = "https://localhost:7060/api/Photograph/";

    constructor(private myHttp: HttpClient) { }

    getCollectionById(id:string): Observable<any> {
        var collection = this.myHttp.get<any>(this.Url + id);
        return collection;
    }
    addCards(cards:Card[]):Observable<any>{
        console.log(cards);
      return this.myHttp.post<any>(this.Url,cards)
    }

  }