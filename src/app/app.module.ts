import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';  // Ensure this is correct

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent  // This should include HomeComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule  // Make sure AppRoutingModule is included
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
