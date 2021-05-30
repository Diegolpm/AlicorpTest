import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateItemComponent } from './ui/components/create-item/create-item.component';
import { HomeComponent } from './ui/pages/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  {
    path: 'Home',
    component: HomeComponent
  },
  {
    path: 'crear-item',
    component: CreateItemComponent
  },
  { path:'**',redirectTo: '/Home',}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
