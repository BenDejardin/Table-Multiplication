import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-multiplication',
  templateUrl: './table-multiplication.component.html',
  styleUrls: ['./table-multiplication.component.css']
})
export class TableMultiplicationComponent implements OnInit {

  @Input()
  number!: number;

  constructor() { }

  tabNum = [1,2,3,4,5,6,7,8,9,10];
  i = 0;
  resultat = 0;
  tabResultat = new Array();

  ngOnInit(): void {
    for (this.i; this.i < this.tabNum.length; this.i++) {
      this.resultat = this.tabNum[this.i] * this.number;
      this.tabResultat.push(this.resultat);      
    }
  }
}
