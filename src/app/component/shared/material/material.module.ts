import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';



@NgModule({
  declarations: [],
  imports: [
   MatToolbarModule,
   MatIconModule,
   MatTableModule,
   MatPaginatorModule,

  ]
  ,
  exports:[
    MatToolbarModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
  ]
})
export class MaterialModule { }
