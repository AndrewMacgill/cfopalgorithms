import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ollAlgs } from 'src/assets/ollAlgs';

@Component({
  selector: 'app-oll-alg-details',
  templateUrl: './oll-alg-details.component.html',
  styleUrls: ['./oll-alg-details.component.css']
})
export class OllAlgDetailsComponent implements OnInit{
  ollAlg;
  ollAlgName;

  constructor(
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.ollAlgName = params.get('name');
      this.ollAlg = ollAlgs[ollAlgs.map(e => e.name).indexOf(this.ollAlgName)];
    });
  }

  isMemorised() {
    window.alert('Congrats! You\'ve memorised this algorithm');
  }
}