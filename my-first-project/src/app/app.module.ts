import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FirsttrialComponent } from './components/firsttrial/firsttrial.component';
import { AgePipe } from './pipes/age.pipe';
import { MyserviceService } from './services/myservice.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { UserdetailsComponent } from './components/userdetails/userdetails.component';
import { FormsComponent } from './components/forms/forms.component';
import { PersonComponent } from './components/person/person.component';
import { ReactiveFormsModule } from '@angular/forms';


const routes:Routes = [
  // {path:'',redirectTo: '/users',pathMatch :'prefix'},
  {path:'',component : FormsComponent},
  {path:'users',component : FirsttrialComponent },
  {path:'users/:id',component : UserdetailsComponent },
  {path:'about',component : HeaderComponent },
  {path:'**',redirectTo: '/about' }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FirsttrialComponent,
    AgePipe,
    UserdetailsComponent,
    FormsComponent,
    PersonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
  ],
  exports:[
    RouterModule
  ],
  providers: [MyserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
