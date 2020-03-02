import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  constructor(private http: HttpClient) {}

  public getJsonObjects(serviceHost: string): Observable<any> {
    console.log('Get objects: ' + serviceHost);
    return this.http.get(serviceHost, this.httpOptions);
  }

  public getJsonObjectbyName(serviceHost: string, objectName: string): Observable<any> {
    return this.http.get(serviceHost + objectName, this.httpOptions);
  }

  public postJsonObject(serviceHost: string, content: string): Observable<any> {
    return this.http.post(serviceHost, content, this.httpOptions);
  }

  public putJsonObject(serviceHost: string, content: string): Observable<any> {
    return this.http.put(serviceHost, content, this.httpOptions);
  }

  public deleteByName(serviceHost: string, objectName: string): Observable<any> {
    return this.http.delete(serviceHost + objectName, this.httpOptions);
  }

}
