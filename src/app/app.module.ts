import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; 
import { AppComponent } from './app.component';
import { RestIntegrationService } from './rest-integration.service';
import { Student } from './student';

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [RestIntegrationService,Student],
  bootstrap: [AppComponent]
})
export class AppModule { }
