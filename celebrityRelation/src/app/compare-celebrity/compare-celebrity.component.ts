import { Component } from '@angular/core';
import { CelebrityDataService } from '../celebrity-data.service';
import { Employee } from '../employee.model';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-compare-celebrity',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './compare-celebrity.component.html',
  styleUrl: './compare-celebrity.component.css',
  providers: [CelebrityDataService]
})
export class CompareCelebrityComponent {
  employees: Employee[] = [];
  employee1: Employee | null = null;
  employee2: Employee | null = null;

  constructor(private celebrityDataService: CelebrityDataService) {}

  ngOnInit(): void {
      this.celebrityDataService.getEmployees().subscribe(data => {
          this.employees = data;
      });
  }

  selectEmployee(id: string, position: 'left' | 'right'): void {
    const employeeId = Number(id);
    console.log(employeeId);
      const selectedEmployee = this.employees.find(e => e.id === employeeId);
      if (position === 'left') this.employee1 = selectedEmployee || null;
      else this.employee2 = selectedEmployee || null;
  }
}
