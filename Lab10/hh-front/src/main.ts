// src/main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http'; // Add this

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient() // Provide HttpClient here
  ]
});
