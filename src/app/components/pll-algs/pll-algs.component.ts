import { Component, OnInit } from '@angular/core';
import { pllAlgs } from 'src/assets/pllAlgs';
import { Router } from '@angular/router';


@Component({
    selector: 'app-pll-algs',
    templateUrl: './pll-algs.component.html',
    styleUrls: ['./pll-algs.component.css']
  })
  export class PllAlgsComponent {
    pllAlgs = pllAlgs;

    constructor(private router: Router) { }
}