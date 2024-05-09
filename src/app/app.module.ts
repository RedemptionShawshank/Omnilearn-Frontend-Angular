import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseListComponent } from './course-list/course-list.component';
import { KoursesComponent } from './kourses/kourses.component';
import { LoginComponent } from './login/login.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HomeComponentComponent } from './home-component/home-component.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { FilterPipe } from './filter.pipe';
import { FilterPipesComponent } from './filter-pipes/filter-pipes.component';
import { SocialMediaComponent } from './social-media/social-media.component';
import { UserWalletComponent } from './user-wallet/user-wallet.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { MatIconModule } from '@angular/material/icon';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';
import { SavedCoursesComponent } from './saved-courses/saved-courses.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    KoursesComponent,
    LoginComponent,
    HomeComponentComponent,
    FilterPipe,
    FilterPipesComponent,
    SocialMediaComponent,
    UserWalletComponent,
    UserInfoComponent,
    ProfilePageComponent,
    FooterComponent,
    SavedCoursesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxSliderModule,
    MatIconModule,
    HttpClientModule
    
  ],
  providers: [
    provideAnimationsAsync(),
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
