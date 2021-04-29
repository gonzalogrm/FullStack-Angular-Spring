import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user/user';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  user: User = new User();
  id: number;

  /*
  * ActivatedRoute: Provides access to information about a route associated with a component
  * that is loaded in an outlet.
  * Use to traverse the `RouterState` tree and extract information from nodes.
  */

  constructor(
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    //Recogemos el ID que nos llega en la url desde el formulario
    this.id = this.activatedRoute.snapshot.params['id'];
    //Utilizamos el método de UserService para obtener usuario
    this.userService.getUserById(this.id).subscribe(
      user => {
        this.user = user;
      }, 
      error => console.log(error));
  }

  //Metodo referenciado por el forumulario HTML
  onSubmitForm(){
    this.userService.updateUser(this.id, this.user).subscribe( 
      userData =>{
        console.log(userData);
        this.redirectUserList();
      }, 
      error => console.log(error));
  }

  //Redirección a lista de usuarios
  redirectUserList(){
    this.router.navigate(['/userlist']);
  }
}
