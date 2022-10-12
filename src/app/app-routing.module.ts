import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './component/about/about.component';
import { HomrComponent } from './component/homr/homr.component';
import { NotfoundComponent } from './component/notfound/notfound.component';

const routes: Routes = [
  {path:'',redirectTo:"home",pathMatch:"full"},
  {path:"home",component:HomrComponent},
  {path:"about",component:AboutComponent},
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
