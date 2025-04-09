// src/app/components/company-list/company-list.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.service';
import { Company } from '../../models/company';
import { VacancyListComponent } from '../vacancy-list/vacancy-list.component';

@Component({
  selector: 'app-company-list',
  standalone: true,
  imports: [CommonModule, VacancyListComponent],
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {
  companies: Company[] = [];
  selectedCompanyId: number | null = null;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getCompanies().subscribe(companies => {
      this.companies = companies;
    });
  }

  showVacancies(companyId: number): void {
    this.selectedCompanyId = companyId;
  }
}
