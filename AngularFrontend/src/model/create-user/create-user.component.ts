import { Component, OnInit } from '@angular/core';
import { User } from '../user/user';
import { UserService } from '../user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  //Cramos un nuevo usuario vacío
  user: User = new User();

  constructor(
    private userSerice: UserService,
    private router: Router) { }

  ngOnInit(): void {
  }

  //Este método es llamado desde el formulario
  //Se encarga de disparar el método de guardado de usuarios
  onSubmitForm(){
    this.commitUser();
  }

  //Este método llama al createUser de userService.
  commitUser(){
    this.userSerice.createUser(this.user).subscribe( 
      userData =>{
        console.log(userData);
        //Llamamos al método de redirección para volver a la lista de usuarios
        this.redirectUserList();
      },
      error => console.log(error));
  }

  //Redirección a lista de usuarios
  redirectUserList(){
    this.router.navigate(['/userlist']);
  }
}
