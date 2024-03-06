import { Component, inject } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormField } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { EmployeesService } from '../../services/employees.service';
import { IEmployee } from '../../models/employee';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employee-form',
  standalone: true,
  imports: [MatInputModule, MatFormField, MatButtonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './employee-form.component.html',
  styleUrl: './employee-form.component.css'
})
export class EmployeeFormComponent {
  httpService= inject(EmployeesService)
  formBuilder= inject(FormBuilder)
  employeForm = this.formBuilder.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    position: ['', [Validators.required]],
    salary: ['', [Validators.required]],

  })
  router = inject(Router)
  route = inject(ActivatedRoute)
  employeeId!: string;
  isEdit = false

  ngOnInit(): void {
    this.employeeId = this.route.snapshot.params['id'];
    if (this.employeeId) {
      this.isEdit = true
      this.httpService.getEmployeById(this.employeeId).subscribe(res => {
        console.log(res);
        this.employeForm.patchValue(res)
        // this.employeForm.controls.email.disable()
      })
    }
    
  }
  save(){
    const employee: IEmployee = {
      name: this.employeForm.value.name ?? '',
      email: this.employeForm.value.email ?? '',
      position: this.employeForm.value.position ?? '',
      salary: this.employeForm.value.salary ?? ''
    } 

    if (this.isEdit) {
      this.httpService.UpdateEmploye(this.employeeId, employee).subscribe(() => {
        console.log('success');
      })
    }else{
      this.httpService.createEmployee(employee).subscribe(() => {
        console.log('success');
      })
    }
    console.log(this.employeForm.value);
    
  }
}
