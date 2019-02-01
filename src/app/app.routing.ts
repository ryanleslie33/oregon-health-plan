import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuickStartComponent }   from './quick-start/quick-start.component';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';


const appRoutes: Routes = [
  {
     path: '',
     component: WelcomeComponent
   },
  {
    path: 'quick-start',
    component: QuickStartComponent
  },

 ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
