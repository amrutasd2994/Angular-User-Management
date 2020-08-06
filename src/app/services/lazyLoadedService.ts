import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable()

export class DataService {
    dummyUrl = 'http://dummy.restapiexample.com/api/v1/employees'
    
    constructor(private http: HttpClient) {}

    getEmployeesData() {
        return this.http.get('http://dummy.restapiexample.com/api/v1/employees')
    }
}


