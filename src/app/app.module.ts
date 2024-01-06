// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';

// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { FirstComponent } from './component/first/first.component';
// import { SecondComponent } from './component/second/second.component';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// @NgModule({
//   declarations: [
//     AppComponent,
//     FirstComponent,
//     SecondComponent
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule,
//     NgbModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './components/first/first.component';
import { ToastrModule } from 'ngx-toastr';
import { SecondComponent } from './components/second/second.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ThirdComponent } from './components/third/third.component';
import { FourthComponent } from './components/fourth/fourth.component';
import { FifthComponent } from './components/fifth/fifth.component';
import { SixthComponent } from './components/sixth/sixth.component';
import { SeventhComponent } from './components/seventh/seventh.component';
import { HttpClientModule } from '@angular/common/http';
import { PrintComponent } from './components/print/print.component';


@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    ThirdComponent,
    FourthComponent,
    FifthComponent,
    SixthComponent,
    SeventhComponent,
    PrintComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
      FormsModule,
      ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}



