import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-associations-list',
  templateUrl: './associations-list.component.html',
  styleUrl: './associations-list.component.css'
})

export class AssociationsListComponent implements OnInit {

  displayedColumns: string[] = ['id', 'Users', 'name',];
  dataSource = [];

  constructor(
    private http: HttpClient

    ) {}



  ngOnInit(): void {
    const request: Observable<any> = this.http.get('http://localhost:3000/associations', { observe: 'response' });
    request.subscribe({ next : (response) => this.dataSource = response.body });
  }

}