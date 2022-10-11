import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from './component/notfound/notfound.component';

const routes: Routes = [
  {path:'',redirectTo:"student",pathMatch:"full"},
  {
    path: 'account', 
    loadChildren: () => import('./component/account/account.module').then(m => m.AccountModule)
  },
  {
    path: 'student', 
    loadChildren: () => import('./component/student/student.module').then(m => m.StudentModule)
  },
  {
    path:'department', 
    loadChildren: () => import('./component/department/department.module').then(m => m.DepartmentModule)
  },
  {path:'**',component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
