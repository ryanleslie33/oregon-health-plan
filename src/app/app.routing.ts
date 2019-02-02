import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuickStartComponent }   from './quick-start/quick-start.component';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { EnrolledComponent } from './enrolled/enrolled.component';
import { LoginComponent } from './login/login.component';


const appRoutes: Routes = [
  {
     path: '',
     component: WelcomeComponent
   },
  {
    path: 'quick-start',
    component: QuickStartComponent
  },
  {
    path: 'enrolled/:id',
    component: EnrolledComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
 ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
