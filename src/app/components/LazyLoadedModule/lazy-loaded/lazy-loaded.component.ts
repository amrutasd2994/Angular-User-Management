import { Component, OnInit } from '@angular/core';
import { EmployeeData } from '../../../interfaces/employeeData';
import { Router } from '@angular/router'
import { DataService } from '../../../services/lazyLoadedService'

@Component({
  selector: 'app-lazy-loaded',
  templateUrl: './lazy-loaded.component.html',
  styleUrls: ['./lazy-loaded.component.css']
})
export class LazyLoadedComponent implements OnInit {
  empData: EmployeeData;

  constructor( private dataService: DataService, private router: Router) { }

  ngOnInit(): void {
    this.getEmployeesData();
  }

  getEmployeesData() {
    this.dataService.getEmployeesData().subscribe((response: any) => {
        this.empData = response.data;
    })
  }

  goToUserDetails(emp) { 
    this.router.navigate(['/user', emp.id]);
  }
}
