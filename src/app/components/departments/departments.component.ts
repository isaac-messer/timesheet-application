import { Component, OnInit } from '@angular/core';
import { DepartmentsService } from 'src/app/services/departments.service';
import { Department } from 'src/app/interfaces/department';
import { Router } from '@angular/router';
import { Observable } from "rxjs";

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.scss']
})
export class DepartmentsComponent {
  departments: Department [];
  $departments: Observable<Department[]> | undefined;
  
  constructor(
    private departmentsService: DepartmentsService,
    private router: Router,
  ) {}

  ngOnInit(): void{

    // this.departmentsService.getDepartment().subscribe(departments => {
    //   this.departments = departments;
    // })

    this.$departments = this.departmentsService.getDepartment();
  };

  goToDepartment(departmentId: string): void {
    this.router.navigate(['./timesheet', {id: departmentId}]);
  }
};
