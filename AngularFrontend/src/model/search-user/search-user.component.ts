import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.css']
})

//Esta clase obtiene la id del formulario y la reenvía
export class SearchUserComponent implements OnInit {

  id: number;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmitForm(){
    //Lo envía a través de app-routing.module.ts
    this.router.navigate(['userdetails', this.id]);
  }
}
