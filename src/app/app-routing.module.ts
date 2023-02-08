import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './common/layouts/content/content.component';

const routes: Routes = [
{ path: "", redirectTo:"auth",pathMatch:"full"},
{ path: 'auth', loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule) },
{path:"main",component:ContentComponent,children:[
{ path: 'users', loadChildren: () => import('./features/users/users.module').then(m => m.UsersModule) },
{ path: 'employees', loadChildren: () => import('./features/employees/employees.module').then(m => m.EmployeesModule) },
{ path: 'products', loadChildren: () => import('./features/products/products.module').then(m => m.ProductsModule) },
{ path: 'dashboard', loadChildren: () => import('./features/dashboard/dashboard.module').then(m => m.DashboardModule) },
]},
 ]
 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
