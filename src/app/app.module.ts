import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Route } from '@angular/router';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TodoComponent } from './todo/todo.component';
import { CompleteComponent } from './complete/complete.component';

const routes: Route[]= [
  {
    path: '',
    component: TodoComponent

  },
  {
    path:'completed',
    component:CompleteComponent

  }
]
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TodoComponent,
    CompleteComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
