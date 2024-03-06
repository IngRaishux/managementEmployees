import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../environments/environment';
import { IEmployee } from '../models/employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  apiUrl = "https://localhost:7285"
  http=inject(HttpClient)
  constructor(){}
  getAllEmploye(){
    return this.http.get<IEmployee[]>(this.apiUrl + "/api/Employees")
  }
  createEmployee(employee: IEmployee){
    return this.http.post(this.apiUrl + "/api/Employees", employee)
  }
  getEmployeById(employeeId: string){
    return this.http.get<IEmployee>(this.apiUrl + "/api/Employees/" + employeeId)
  }
  UpdateEmploye(employeeId: string, employee: IEmployee){
    return this.http.put<IEmployee>(this.apiUrl + "/api/Employees/" + employeeId, employee)
  }

  DeleteEmployee(employeId: string){
    return this.http.delete(this.apiUrl + "/api/Employees/" + employeId)
  }
  
}
