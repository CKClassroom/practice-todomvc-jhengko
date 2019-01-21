import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FilterPipe } from './filter.pipe';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { TodoFiltersComponent } from './todo-filters/todo-filters.component';

@NgModule({
  declarations: [
    AppComponent,
    FilterPipe,
    FooterComponent,
    HeaderComponent,
    TodoFiltersComponent
  ],
  imports: [
    BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
