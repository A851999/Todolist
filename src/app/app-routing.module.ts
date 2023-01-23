import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoComponent } from './mycomponents/todo/todo.component';
import { AboutComponentsComponent } from './mycomponents/about-components/about-components.component';
const routes: Routes = [
  { path: '', component: TodoComponent },
  { path: 'about', component: AboutComponentsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
