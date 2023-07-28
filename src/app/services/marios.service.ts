import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, mergeMap, Observable, tap, toArray} from "rxjs";
import {Marios} from "../interfaces/marios";
import {UserService} from "./user.service";

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

  countReceivedMarios(userId: string): Observable<number> {
    return this.http.get<Marios[]>(`${this.apiUrl}/${userId}/receivedMarios`).pipe(
      tap(data => console.log('Received Marios:', data)),
      map(marios => marios.length)
    );
  }

  countSentMarios(userId: string): Observable<number> {
    return this.http.get<Marios[]>(`${this.apiUrl}/${userId}/createdMarios`).pipe(
      tap(data => console.log('Sent Marios:', data)),
      map(marios => marios.length)
    );
  }
}
