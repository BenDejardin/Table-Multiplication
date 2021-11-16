import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tables-multiplication',
  templateUrl: './tables-multiplication.component.html',
  styleUrls: ['./tables-multiplication.component.css']
})


export class TablesMultiplicationComponent implements OnInit {


  constructor() { }

  @Input()
  nbTab!: number;

  i = 1;
  tabNum = new Array();

  ngOnInit(): void {
    for (this.i; this.i <= this.nbTab; this.i++) {
      this.tabNum.push(this.i);
    }
  }

}
