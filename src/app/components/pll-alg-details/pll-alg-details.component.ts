import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { pllAlgs } from 'src/assets/pllAlgs';

@Component({
  selector: 'app-pll-alg-details',
  templateUrl: './pll-alg-details.component.html',
  styleUrls: ['./pll-alg-details.component.css']
})
export class PllAlgDetailsComponent implements OnInit {
  pllAlg;
  pllAlgName;

  constructor(
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
        this.pllAlgName = params.get('name');
      this.pllAlg = pllAlgs[pllAlgs.map(e => e.name).indexOf(this.pllAlgName)];
    });
  }

  isMemorised() {
    window.alert('Congrats! You\'ve memorised this algorithm');
  }
}