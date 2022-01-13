import {Component, OnDestroy, OnInit} from '@angular/core';
import {EmployeesService} from "../../services/employees.service";
import {Subject} from "rxjs";
import {takeUntil} from "rxjs/operators";

@Component({
  selector: 'app-employees-container',
  templateUrl: './employees-container.component.html',
  styleUrls: ['./employees-container.component.scss']
})
export class EmployeesContainerComponent implements OnInit, OnDestroy {
  destroyComponent$: Subject<boolean> = new Subject<boolean>();

  constructor(private employeesService: EmployeesService) { }

  ngOnInit(): void {
    this.employeesService.getEmployees()
      .pipe(
        takeUntil(this.destroyComponent$)
      )
      .subscribe(
      el => console.log(el)
    )
  }

  ngOnDestroy(): void {
    this.destroyComponent$.next();
    this.destroyComponent$.complete();
  }


}
