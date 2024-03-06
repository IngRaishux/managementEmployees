import { Component, OnInit, inject } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { IEmployee } from '../../models/employee';
import { EmployeesService } from '../../services/employees.service';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import { Router, RouterLink } from '@angular/router';


@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatButtonModule, RouterLink],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent implements OnInit {
  router=inject(Router)
  employeeList: IEmployee[] = []
  httpService = inject(EmployeesService)
  displayedColumns: string[] = ['id', 'name', 'email','position','salary', 'actions'];

  

  ngOnInit(): void {
    this.getEmployeeFromServer()
  }

  getEmployeeFromServer(){
    this.httpService.getAllEmploye().subscribe(res => {
      this.employeeList = res
      console.log(this.employeeList);
    })
  }

  edit(id: string){
    this.router.navigateByUrl("/employee/" + id)
    
  }

  delete(id: string){
    this.httpService.DeleteEmployee(id).subscribe(() => {
      console.log('employe delete!');
      this.getEmployeeFromServer()
    })
  }

  isOpen = false;
  openModal(){
    this.isOpen = true;
  }
  closeModal(){
    this.isOpen = false;
  }
  submitData(formdata: IEmployee){

  }
}
