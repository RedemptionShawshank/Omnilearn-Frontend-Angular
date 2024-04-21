import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseListComponent } from './course-list/course-list.component';
import { KoursesComponent } from './kourses/kourses.component';
import { AppComponent } from './app.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { UserWalletComponent } from './user-wallet/user-wallet.component';

const routes: Routes = [
  {path: '',redirectTo:'/home', pathMatch:'full'},
  {path:'home',component:AppComponent},
  {path:'courses/:name',component:KoursesComponent},
  {path:'username/profilePage',component:ProfilePageComponent},
  {path:'username/wallet',component:UserWalletComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }




