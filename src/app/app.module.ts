import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { WeightService } from './services/weight.service';

import { AppComponent } from './app.component';
import { WeightDetailComponent } from './weight-detail/weight-detail.component';
import { EditorComponent } from './editor/editor.component';

import { AppRoutingModule }     from './app.routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    WeightDetailComponent,
    EditorComponent,
    DashboardComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [WeightService],
  bootstrap: [AppComponent]
})
export class AppModule { }
