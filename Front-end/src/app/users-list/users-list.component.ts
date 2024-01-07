import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.css'
})
export class UsersListComponent implements OnInit {

  displayedColumns: string[] = ['id', 'lastname', 'firstname', 'age'];
  dataSource = [];

  constructor(
    private http: HttpClient

    ) {}



  ngOnInit(): void {
    const request: Observable<any> = this.http.get('http://localhost:3000/users', { observe: 'response' });
    request.subscribe({ next : (response) => this.dataSource = response.body });
  }

}

