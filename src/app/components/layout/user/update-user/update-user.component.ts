import { Component, OnInit } from '@angular/core';
import {User} from '../../../../model/User';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../../../service/userService';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  id!:number;
  user?:User;
  submitted = false;
  formUpdate!: FormGroup;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private userService: UserService,
              private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.user = new User();
    this.id = this.route.snapshot.params['id'];
    this.userService.getUser(this.id).subscribe(res => {
      console.log(res.data);
      this.user = res.data;
    },error => console.log(error))
    this.formUpdate = this.formBuilder.group({
      username: ['',[Validators.required,Validators.pattern('^[a-z0-9_-]{3,15}$')]],
      password: ['',[Validators.required,Validators.pattern('^[a-z0-9_-]{3,15}$')]],
      age: ['',[Validators.required,Validators.pattern('^(0?[1-9]|[1-9][0-9]|[1][1-9][1-9]|200)$')]],
      dob: ['',[Validators.required,Validators.pattern('(?:(?:31(\\/|-|\\.)(?:0?[13578]|1[02]))\\1|(?:(?:29|30)(\\/|-|\\.)(?:0?[13-9]|1[0-2])\\2))(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$|^(?:29(\\/|-|\\.)0?2\\3(?:(?:(?:1[6-9]|[2-9]\\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\\d|2[0-8])(\\/|-|\\.)(?:(?:0?[1-9])|(?:1[0-2]))\\4(?:(?:1[6-9]|[2-9]\\d)?\\d{2})')]],
      email: ['',[Validators.required,Validators.pattern('[^@ \\t\\r\\n]+@[^@ \\t\\r\\n]+\\.[^@ \\t\\r\\n]+')]],
      image: [''],
      appGroup_id: ['1']
    })
  }
  updateUser(){
    this.userService.updateUser(this.id,this.formUpdate.value).subscribe(
        (res: any) => {
          console.log(res);
          this.user = new User();
          this.gotoList();
        },(error: any) => console.log(error)
    );
  }
  onSubmit() {
    this.submitted = true;
    this.updateUser();
  }
  gotoList() {
    this.router.navigate(['admin/user']);
  }

}
