import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UserService} from "../../services/user.service";
import {User} from "../../interfaces/user";

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit{

  constructor(private userService:UserService) {}

  users:User[]=[]

  ngOnInit()  {
    this.userService.users.subscribe(data=>{
      this.users = data
    })
  }


}
