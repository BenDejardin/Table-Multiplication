import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TableMultiplicationComponent } from './table-multiplication/table-multiplication.component';
import { TablesMultiplicationComponent } from './tables-multiplication/tables-multiplication.component';

@NgModule({
  declarations: [
    AppComponent,
    TableMultiplicationComponent,
    TablesMultiplicationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
