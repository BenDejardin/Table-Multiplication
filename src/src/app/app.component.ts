
import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Multiplication'; 
  identForm!: FormGroup;
  isSubmitted = false;
  ngModel = 0;
  nb!: number;
  nbTableau!: number;
  

  ngOnInit(): void {
    this.identForm = new FormGroup({ nb: new FormControl('') });
  }
  get formControls() { return this.identForm.controls; } 

  submits(){
    this.isSubmitted = true;
  }

  number(){
    if(this.nb != 0 && this.isSubmitted == true ){
      this.isSubmitted = false;
      return true;
    }
    else{
      return false;
    }
  }
}
