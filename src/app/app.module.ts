import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { AppComponent } from './app.component';
import { MagicianComponent } from './magician/magician.component';
import { MagicianDetailComponent } from './magician-detail/magician-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule} from '@angular/common/http';
import { MagicianSearchComponent } from './magician-search/magician-search.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatMenuModule } from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatInputModule} from '@angular/material/input'; 


@NgModule({
  declarations: [
    AppComponent,
    MagicianComponent,
    MagicianDetailComponent,
    MessagesComponent,
    DashboardComponent,
    MagicianSearchComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatButtonModule,
    MatMenuModule,
    MatTableModule,
    MatCardModule,
    MatGridListModule,
    MatInputModule,
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
