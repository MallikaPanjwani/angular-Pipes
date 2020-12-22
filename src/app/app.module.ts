import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { AgePipe } from "./Pipes/age.pipe";
import { FilterPipe } from "./Pipes/filter.pipe";
import { SortPipe } from "./Pipes/sort.pipe";

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent, AgePipe, FilterPipe, SortPipe],
  bootstrap: [AppComponent]
})
export class AppModule {}
