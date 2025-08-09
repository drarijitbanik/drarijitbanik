import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { SpinalSurgeriesComponent } from './treatmnt-offered/spinal-surgeries/spinal-surgeries.component';

const routes: Routes = [
  {
    path: 'home',
    component: MainComponent,
    
  },
  {
    path: 'about',
    component: MainComponent
  },
  {
    path: 'region',
    component: MainComponent
  },
  {
    path: 'spinal-surgeries',
    component: SpinalSurgeriesComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  { path: '**', 
    redirectTo: 'home' 
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
