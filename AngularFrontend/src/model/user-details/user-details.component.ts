import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user/user';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  user : User;
  id: number;

  constructor(
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    //Recogemos el id del formulario desde la ID
    this.id = this.activatedRoute.snapshot.params['id'];

    this.user = new User();
    this.userService.getUserById(this.id).subscribe( 
      data => {
        this.user = data;
      });
  }

  //Redirección a lista de usuarios
  redirectUserList(){
    this.router.navigate(['/userlist']);
  }
}
