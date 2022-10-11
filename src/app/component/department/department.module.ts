import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { CreateComponent } from './create/create.component';
import { DetailsComponent } from './details/details.component';
import { EditComponent } from './edit/edit.component';
import { ListComponent } from './list/list.component';

let routes:Routes=[
  {path:'',redirectTo:"/department/list",pathMatch:"full"},
  {path:'list',component:ListComponent},
  {path:'create',component:CreateComponent},
  {path:'edit/:id',component:EditComponent},
  {path:'details/:id',component:DetailsComponent},
]

@NgModule({
  declarations: [
    ListComponent,
    DetailsComponent,
    CreateComponent,
    EditComponent
  ],
  imports: [
    SharedModule,

    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class DepartmentModule { }
