import {Component, OnInit} from '@angular/core';
import {User} from '../../../model/User';
import {UserService} from '../../../service/userService';
import {Router} from '@angular/router';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
    userList: User[] = [];
    id!: number;
    filter!: '';
    key: string = '';
    reverse: boolean = false;
    p: number = 1;

    constructor(private userService: UserService,
                private router: Router) {
    }
    sort(key: any){
        this.key = key;
        this.reverse = !this.reverse;
    }
    ngOnInit(): void {
        this.reloadData();
    }
    reloadData() {
        this.userService.getUserList().subscribe(res => this.userList = res.data);
    }
    deleteUser(id: any){
        this.userService.deleteUser(id).subscribe(res => this.reloadData());
    }
    updateUser(id: any){
        this.router.navigate(['update',id]);
    }
    userDetail(id: any){
        this.router.navigate(['detail',id]);
    }
    createUser(){
        this.router.navigate(['create']);
    }
}
