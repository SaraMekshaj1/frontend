import { Component, OnInit } from '@angular/core';


import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';
@Component({
  selector: 'app-allusers',
  standalone: true,
  imports: [],
  templateUrl: './allusers.component.html',
  styleUrl: './allusers.component.scss'
})
export class AllusersComponent implements OnInit {

  user: User[] | undefined;

  constructor(private userService: UserService,
    private router: Router) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  private getEmployees(){
    this.userService.getEmployeesList().subscribe(data => {
      this.user = data;
    });
  }

  employeeDetails(id: number){
    this.router.navigate(['employee-details', id]);
  }

  updateEmployee(id: number){
    this.router.navigate(['update-employee', id]);
  }
  deleteEmployee(id: number){
    this.userService.deleteEmployee(id).subscribe( data => {
      console.log(data);
      this.getEmployees();
    })
  }
}