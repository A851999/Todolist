import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './mycomponents/todo/todo.component';
import { TodoItemComponent } from './mycomponents/todo-item/todo-item.component';
import { AddTodoComponent } from './mycomponents/add-todo/add-todo.component';
import { FormsModule } from '@angular/forms';
import { AboutComponentsComponent } from './mycomponents/about-components/about-components.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TodoItemComponent,
    AddTodoComponent,
    AboutComponentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
