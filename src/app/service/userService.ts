import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
    providedIn: 'root'
})

export class UserService{
    private baseUrl = 'http://localhost:8080/admin/user/api';
    constructor(private http: HttpClient) {
    }
    getUser(id: number): Observable<any>{
        return this.http.get(this.baseUrl + '/user?id=' + id);
    }

    getUserList(): Observable<any>{
        return this.http.get(this.baseUrl);
    }
    updateUser(id: number, value:any):Observable<any>{
        return this.http.put(this.baseUrl + '/update', value);
    }
    deleteUser(id: number):Observable<any>{
        return this.http.delete(this.baseUrl + '?id='+id)
    }
    createUser(user: Object):Observable<any>{
        return this.http.post(this.baseUrl + '/create',user);
    }
}
