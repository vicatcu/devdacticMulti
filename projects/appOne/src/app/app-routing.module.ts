import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'lazy', pathMatch: 'full' },
  { path: 'lazy',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  { path: 'ref', loadChildren: './lazy/lazy.module#LazyModule'},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }