import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseListComponent } from './course-list/course-list.component';
import { KoursesComponent } from './kourses/kourses.component';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path: '',redirectTo:'/home', pathMatch:'full'},
  {path:'home',component:AppComponent},
  {path:'courses/:name',component:KoursesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }




