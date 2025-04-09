// src/app/app.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyListComponent } from './components/company-list/company-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, CompanyListComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hh-front';
}
