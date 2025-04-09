// src/app/components/vacancy-list/vacancy-list.component.ts
import { Component, Input, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common'; // Add this
import { ApiService } from '../../services/api.service';
import { Vacancy } from '../../models/vacancy';

@Component({
  selector: 'app-vacancy-list',
  standalone: true,
  imports: [CommonModule], // Add CommonModule here
  templateUrl: './vacancy-list.component.html',
  styleUrls: ['./vacancy-list.component.css']
})
export class VacancyListComponent implements OnChanges {
  @Input() companyId!: number;
  vacancies: Vacancy[] = [];

  constructor(private apiService: ApiService) { }

  ngOnChanges(): void {
    if (this.companyId) {
      this.apiService.getCompanyVacancies(this.companyId).subscribe(vacancies => {
        this.vacancies = vacancies;
      });
    }
  }
}
