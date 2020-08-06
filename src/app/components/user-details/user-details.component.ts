import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../services/lazyLoadedService'

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  empDetails: any
  constructor( private route: ActivatedRoute, private dataService: DataService) { }

  ngOnInit(): void {
    this.getEmployeeDetails()
  }

  getEmployeeDetails() {
    this.dataService.getEmployeesData().subscribe((response: any) => {
        this.empDetails = response.data[this.route.snapshot.params.id];
    })
  }

}
