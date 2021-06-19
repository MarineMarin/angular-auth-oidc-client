import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AuthConfigModule } from './auth-config.module';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';

@NgModule({
  imports: [BrowserModule, AppRoutingModule, AuthConfigModule],
  declarations: [AppComponent, ForbiddenComponent, HomeComponent, NavigationComponent, UnauthorizedComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}