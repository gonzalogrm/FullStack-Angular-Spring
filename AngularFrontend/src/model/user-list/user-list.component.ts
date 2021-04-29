import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user/user';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[]

  constructor(
    //Inyectamos el UserService que hemos importado
    private userService : UserService,
    private router: Router
  ) { }

  //De la documentación: A lifecycle hook that is called after Angular 
  //has initialized all data-bound properties of a directive.
  ngOnInit(): void {
    this.getUsers();
  }

  private getUsers(){
    //Utilizamos el servicio inyectado para encontrar los usuarios
    this.userService.findAllUsers().subscribe(
      //Arrow function, funcion anónima similar a expersiones Lambda
      userData => {this.users = userData}
    );
  }

  updateUser(id: number){
    //Lo envía a través de app-routing.module.ts
    this.router.navigate(['updateuser', id]);
  }

  deleteUser(id: number){
    this.userService.deleteUser(id).subscribe( 
      userData => {
      console.log(userData);
      //Volvemos a recuperar los Users tras el borrado
      this.getUsers();
    })
  }
}
