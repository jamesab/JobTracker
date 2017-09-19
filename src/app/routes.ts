import { Routes } from '@angular/router'

import { JobsComponent } from './jobs/jobs.component';
import { AddUpdateComponent } from './jobs/add-update.component';
import { PageNotFoundComponent } from './errors/page-not-found.component';
import { LoginComponent } from './login/login.component';


export const appRoutes: Routes = [
    { path: 'jobs', component: JobsComponent },
    { path: 'jobs/:id', component: AddUpdateComponent },
    { path: 'login', component: LoginComponent },
    { path: '', redirectTo: 'login', pathMatch: 'full' }, // Default Route
    { path: '**', component: PageNotFoundComponent }// 404 NOT FOUND
  ]