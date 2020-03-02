import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import { MatButtonModule, MatCheckboxModule, MatMenuModule, MatIconModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { ReactorDialogComponent } from './reactor-dialog/reactor-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FooterComponent,
    PageNotFoundComponent,
    HomeComponent,
    ListComponent,
    ReactorDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatDialogModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatButtonModule,
    MatCheckboxModule,
    MatMenuModule,
    MatIconModule
  ],
  entryComponents: [
    ReactorDialogComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
