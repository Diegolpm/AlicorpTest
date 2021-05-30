import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title: string;
  org: string;

  displayedColumns: string[] = ['codigo', 'nombre', 'descripcion', 'acción'];

  constructor(
    public router: Router,
  ) { }

  ngOnInit(): void {
    this.title = 'Listado Test';
    this.org = 'Alicorp';

  }


  createItem() {
    this.router.navigate(['crear-item']);
  }
 

}
