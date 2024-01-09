import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-associations-list',
  templateUrl: './associations-list.component.html',
  styleUrl: './associations-list.component.css'
})

export class AssociationsListComponent implements OnInit {

  idAssociationToken: boolean = true;
  idAssociationControl = new FormControl('',[Validators.required]);

  displayedColumns: string[] = ['id', 'Users', 'name',];
  dataSource = [];

  constructor(
    private http: HttpClient,
    private router: Router,
    ) {}



  ngOnInit(): void {
    const request: Observable<any> = this.http.get('http://localhost:3000/associations', { observe: 'response' });
    request.subscribe({ next : (response) => {
      this.dataSource = response.body
    }});
  }

  Rechecher(): void {
    const request: Observable<any> = this.http.get('http://localhost:3000/users/' + this.idAssociationControl.value, { observe: 'response' });
  
    request.subscribe({
      next: (response) => {
        if (response.body) {
          // Si la réponse contient des données (utilisateur trouvé)
          this.dataSource = response.body;
          console.log(response);
          this.idAssociationToken = true;
          this.router.navigateByUrl('/associations/' + this.idAssociationControl.value);
        } else {
          // Aucun utilisateur trouvé, gérer en conséquence (peut-être afficher un message d'erreur)
          this.idAssociationToken = false;
          console.log('Aucun utilisateur trouvé');
        }
      },
      error: (error) => {
        // Gérer les erreurs de requête ici
        this.idAssociationToken = false;
        console.error('Erreur de recherche d\'utilisateur:', error);
      }
    });
  }

}