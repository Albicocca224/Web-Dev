// src/app/models/vacancy.ts
import { Company } from './company'; // Add this

export interface Vacancy {
  id: number;
  name: string;
  description: string;
  salary: number;
  company: Company;
}
