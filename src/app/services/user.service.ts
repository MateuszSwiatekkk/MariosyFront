import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../interfaces/user";
import {BehaviorSubject, Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userUrl = environment.apiUrl + '/api/users';
  private usersData: User[] = []
  private users$ = new BehaviorSubject<User[]>([])

  constructor(private http: HttpClient) {
  }

  get users() {
    if (this.usersData.length === 0) {
      this.fetchUsers()
    }
    return this.users$.asObservable()
  }

  fetchUsers() {
    return this.http.get<User[]>(this.userUrl)
      .subscribe((data) => {
        this.usersData = data;
        this.users$.next(data)
      })
  }

  getUserById(id: string): Observable<User> {
    return this.http.get<User>(`${this.userUrl}/${id}`);
  }

}
