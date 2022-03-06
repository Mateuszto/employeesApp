import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EmployeesService } from 'src/app/services/employees.service';
import { AddEmployeeComponent } from '../dialogs/add-employee/add-employee.component';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import {FiltersComponent} from "../dialogs/filters/filters.component";
import {AuthService} from "../../services/auth.service";
import {IUser} from "../../interfaces/user.model";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  search: FormControl = new FormControl('');
  userData: IUser;
  passwd: string;

  constructor(
    private dialog: MatDialog,
    private employeesService: EmployeesService,
    private auth: AuthService
  ) {}

  ngOnInit(): void {
    this.search.valueChanges
      .pipe(debounceTime(500))
      .subscribe((value) => this.employeesService.sendSearchValue(value));

    this.userData = this.auth.getUserData();
    this.auth.getData().subscribe(el => this.passwd = el.password);
  }

  addEmployee(): void {
    this.dialog.open(AddEmployeeComponent);
  }

  openFilters(): void {
    this.dialog.open(FiltersComponent);
    if(this.passwd == 'testin') {
      console.log(this.passwd)
      console.log('najs')
    } else {
      console.log(this.passwd)
      console.log('naura')
    }
  }

  logout(): void {
    this.auth.logout();
  }
}
