import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Routes,RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

import { OneComponent } from './one/one.component';
import { StudentComponent } from './student/student.component';
import { CustomerComponent } from './customer/customer.component';
import { TestsuiteComponent } from './testsuite/testsuite.component';
import { DatasetComponent } from './dataset/dataset.component';
import { FeedbackComponent } from './feedback/feedback.component';

const routes: Routes = [
  {path:'one', component:OneComponent},
  {path:'student', component:StudentComponent},
  {path:'customer', component:CustomerComponent},
  {path:'Testsuite', component:TestsuiteComponent},
  {path:'dataset', component:DatasetComponent},
  {path:'feedback', component:FeedbackComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    OneComponent,
    StudentComponent,
    CustomerComponent,
    TestsuiteComponent,
    DatasetComponent,
    FeedbackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,MatFormFieldModule,MatInputModule,
    BrowserAnimationsModule,MatCardModule,MatDatepickerModule,MatToolbarModule,MatIconModule,MatSidenavModule,
    MatListModule,MatButtonModule,RouterModule.forRoot(routes)
    
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
