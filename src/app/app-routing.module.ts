import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { FileDashboardComponent } from './file-dashboard/file-dashboard.component';
import { SharedfileDashboardComponent } from './sharedfile-dashboard/sharedfile-dashboard.component';


const routes: Routes = [
  { path : 'register', component : RegisterComponent},
  { path : 'userdash', component : UserDashboardComponent},
  { path : 'filedash', component : FileDashboardComponent},
  { path : 'sharefiledash', component : SharedfileDashboardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
