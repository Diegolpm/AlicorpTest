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

  constructor() { }

  ngOnInit(): void {
    this.title = 'Listado Test';
    this.org = 'Alicorp';

  }

}
