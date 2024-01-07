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
  minuteSource : any[] = [];


  constructor(private route: ActivatedRoute,private http: HttpClient) {
    this.associationId = this.route.snapshot.paramMap.get('id')!;
  }

  ngOnInit(): void {
    const request1: Observable<any> = this.http.get('http://localhost:3000/associations/' + this.associationId, { observe: 'response' });
    request1.subscribe({ next : (response) =>{
      this.dataSource = [response.body];
    } });
    const request2: Observable<any> = this.http.get('http://localhost:3000/minutes/' + this.associationId, { observe: 'response' });
    request2.subscribe({ next : (response) => this.minuteSource = [response.body] });
  }

  isCurrentUserInAssociation(Id: string): boolean {
    return Id === this.associationId;
  }
  
}
// @PrimaryGeneratedColumn()
// id : Minute;
// @Column()
// content: string;
// @ManyToMany(() => User, User => User.id)
// @JoinTable()
// idVoters: number[];
// @Column()
// date: string;
// @Column()
// idAssociation: number;
