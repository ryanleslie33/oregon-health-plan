import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuickStartComponent }   from './quick-start/quick-start.component';
import { AppComponent } from './app.component';


const appRoutes: Routes = [
  {
     path: '',
     component: AppComponent
   },
  {
    path: 'quick-start',
    component: QuickStartComponent
  },

 ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
