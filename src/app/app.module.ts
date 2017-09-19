import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { JobsComponent } from './jobs/jobs.component';
import { AddUpdateComponent } from './jobs/add-update.component';
import { PageNotFoundComponent } from './errors/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './nav/navbar.component';
import { AppComponent } from './app.component';
import { appRoutes } from './routes';


@NgModule({
  declarations: [
    JobsComponent,
    AddUpdateComponent,
    PageNotFoundComponent,
    LoginComponent,
    NavbarComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
