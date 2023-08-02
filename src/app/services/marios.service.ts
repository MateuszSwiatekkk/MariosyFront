import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, mergeMap, Observable, tap, toArray} from "rxjs";
import {Marios} from "../interfaces/marios";
import {UserService} from "./user.service";
import {mariosPayload} from "../interfaces/mariosPayload";

@Injectable({
  providedIn: 'root'
})
export class MariosService {
  private apiUrl = '/api/marios';
  constructor(
    private http: HttpClient,
    private userService: UserService
  ) {}

  getMarios(): Observable<Marios[]> {
    return this.http.get<Marios[]>(this.apiUrl).pipe(
      mergeMap(marioses => marioses), //flatten Marios array
      mergeMap(marios =>
        this.userService.getUserById(marios.sender).pipe(  //for every marios
          map(user => ({ ...marios, senderData: user })), //add User data
        )),
      toArray()
    );
  }

  getSentMarios(userId: string): Observable<Marios[]> {
    return this.http.get<Marios[]>(`${this.apiUrl}/${userId}/createdMarios`).pipe(
      mergeMap(marioses => marioses),
      mergeMap(marios =>
        this.userService.getUserById(marios.recipients[0]).pipe(
          map(user => ({ ...marios, senderData: user })),
        )),
      toArray()
    );
  }

  getReceivedMarios(userId: string): Observable<Marios[]> {
    return this.http.get<Marios[]>(`${this.apiUrl}/${userId}/receivedMarios`).pipe(
      mergeMap(marioses => marioses),
      mergeMap(marios =>
        this.userService.getUserById(marios.sender).pipe(
          map(sender => ({ ...marios, senderData: sender })),
        )),
      toArray()
    );
  }


  countReceivedMarios(userId: string): Observable<number> {
    return this.http.get<Marios[]>(`${this.apiUrl}/${userId}/receivedMarios`).pipe(
      // tap(data => console.log('Received Marios:', data)),
      map(marios => marios.length)
    );
  }

  countSentMarios(userId: string): Observable<number> {
    return this.http.get<Marios[]>(`${this.apiUrl}/${userId}/createdMarios`).pipe(
      // tap(data => console.log('Sent Marios:', data)),
      map(marios => marios.length)
    );
  }
  addMarios(mariosData: mariosPayload): Observable<any> {
    return this.http.post(this.apiUrl + '/createMarios', mariosData);
  }
}
