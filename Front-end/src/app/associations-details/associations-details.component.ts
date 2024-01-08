import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-associations-details',
  templateUrl: './associations-details.component.html',
  styleUrl: './associations-details.component.css'
})
export class AssociationsDetailsComponent {

  associationId: string;
  displayedColumns: string[] = ['id', 'Users', 'name',];
  dataSource : any[] = [];
  minuteColumns: string[] = ['minutes : id', 'content','idVoters','date'];
  minuteSource = [];


  constructor(private route: ActivatedRoute,private http: HttpClient) {
    this.associationId = this.route.snapshot.paramMap.get('id')!;
  }

  ngOnInit(): void {
    const request1: Observable<any> = this.http.get('http://localhost:3000/associations/' + this.associationId, { observe: 'response' });
    request1.subscribe({ next : (response) =>{
      this.dataSource = [response.body];
    } });
    const request2: Observable<any> = this.http.get('http://localhost:3000/minutes/association/' + this.associationId, { observe: 'response' });
    request2.subscribe({ next : (response) => this.minuteSource = response.body });
  }

  isAssociation(Id: number): boolean {
    return Id.toString() === this.associationId.toString();
  }

  // getVoters(Id: number): Observable<any> {
  //   const request: Observable<any> = this.http.get('http://localhost:3000/minutes/' + Id + '/Voters', { observe: 'response' });
  //   request.subscribe({ next : (response) => this.minuteSource = response.body });
  //   console.log(request);
  //   return request
  // }
  
}
