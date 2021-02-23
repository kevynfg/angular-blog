import { environment } from './../environments/environment';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BlogBaseModule } from './blog-base/blog-base.module';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModalModule.forRoot(),
    BlogBaseModule,
    AngularFireModule.initializeApp(environment.firebase),
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [AngularFireStorage, AngularFirestore],
  bootstrap: [AppComponent],
})
export class AppModule {}
