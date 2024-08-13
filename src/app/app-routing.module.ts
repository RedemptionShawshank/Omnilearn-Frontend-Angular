import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseListComponent } from './course-list/course-list.component';
import { KoursesComponent } from './kourses/kourses.component';
import { AppComponent } from './app.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { UserWalletComponent } from './user-wallet/user-wallet.component';
import { LoginComponent } from './login/login.component';
import { SavedCoursesComponent } from './saved-courses/saved-courses.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';


const routes: Routes = [
  {path: '',redirectTo:'/home', pathMatch:'full'},
  {path:'home',component:CourseListComponent},
  {path:'courses/:name',component:KoursesComponent},
  {path:'username/profilePage',component:ProfilePageComponent},
  {path:'username/wallet',component:UserWalletComponent},
  {path:'username/savedCourses',component:SavedCoursesComponent},
  {path:'autorization',component:LoginComponent},
  {path:'username/edit',component:EditProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }




