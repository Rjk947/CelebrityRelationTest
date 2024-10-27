import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Employee } from './employee.model';

@Injectable({
  providedIn: 'root'
})
export class CelebrityDataService {

  private apiUrl = 'assets/employees.json';

    constructor(private http: HttpClient) {}

    getEmployees(): Observable<Employee[]> {
        return this.http.get<Employee[]>(this.apiUrl);
    }

    getEmployeeById(id: number): Observable<Employee | undefined> {
        return this.getEmployees().pipe(
            map(employees => employees.find(employee => employee.id === id))
        );
    }
}
