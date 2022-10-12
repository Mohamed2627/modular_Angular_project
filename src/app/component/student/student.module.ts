import { NgModule } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';
import { ListComponent } from './list/list.component';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { DetailsComponent } from './details/details.component';
import { SharedModule } from '../shared/shared.module';

let routes:Routes=[
  {path:'',redirectTo:"/student/list",pathMatch:"full"},
  {path:'list',component:ListComponent},
  {path:'create',component:CreateComponent},
  {path:'edit/:id',component:EditComponent},
  {path:'details/:id',component:DetailsComponent},
]

@NgModule({
  declarations: [
    ListComponent,
    DetailsComponent,
    EditComponent,
    CreateComponent
  ],
  imports: [
    NgxPaginationModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class StudentModule { }
