import { Component, OnInit } from '@angular/core';
import {User} from '../../../../model/User';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../../../service/userService';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  id!: number;
  user!: User;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private userService: UserService) { }

  ngOnInit(): void {
    this.user = new User();
    this.id = this.route.snapshot.params['id'];
    this.userService.getUser(this.id).subscribe(res => {
      console.log(res);
      this.user =res.data;
    },error => console.log(error));
  }
  goTolist(){
    this.router.navigate(['admin/user']);
  }


}
