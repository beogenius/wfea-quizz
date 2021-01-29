import { Component, OnInit } from '@angular/core';
import {User} from '../../../../model/User';
import {UserService} from '../../../../service/userService';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  user: User = new User();
  submitted = false;
  formCreate!: FormGroup;
  constructor(private userService: UserService,
              private router: Router,
              private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formCreate = this.formBuilder.group({
      username: ['',[Validators.required,Validators.pattern('^[a-z0-9_-]{3,15}$')]],
      password: ['',[Validators.required,Validators.pattern('^[a-z0-9_-]{3,15}$')]],
      age: ['',[Validators.required,Validators.pattern('^(0?[1-9]|[1-9][0-9]|[1][1-9][1-9]|200)$')]],
      dob: ['',[Validators.required,Validators.pattern('(?:(?:31(\\/|-|\\.)(?:0?[13578]|1[02]))\\1|(?:(?:29|30)(\\/|-|\\.)(?:0?[13-9]|1[0-2])\\2))(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$|^(?:29(\\/|-|\\.)0?2\\3(?:(?:(?:1[6-9]|[2-9]\\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\\d|2[0-8])(\\/|-|\\.)(?:(?:0?[1-9])|(?:1[0-2]))\\4(?:(?:1[6-9]|[2-9]\\d)?\\d{2})')]],
      email: ['',[Validators.required,Validators.pattern('[^@ \\t\\r\\n]+@[^@ \\t\\r\\n]+\\.[^@ \\t\\r\\n]+')]],
      image: [''],
      appGroup_id: ['1']
    })
  }
  save(){
    this.userService.createUser(this.formCreate.value).subscribe((data: any) => {
          this.gotoList();
        },
        (error: any) => console.log(error));
  }
  onSubmit(){
    this.submitted = true;
    this.save();
  }
  gotoList(){
    this.router.navigate(['user']);
  }

}
