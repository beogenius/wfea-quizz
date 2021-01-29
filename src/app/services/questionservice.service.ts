import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {map} from 'rxjs/operators';
import {Question} from '../model/Question';
@Injectable({
  providedIn: 'root'
})
export class QuestionserviceService {

  headers = new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json');
  httpOptions = {
    headers: this.headers,
  };
  questionList: Question[] = [];

  constructor(private http: HttpClient) {
  }

  url: string = 'http://localhost:8080/admin/question/api/';

  getQuestions() : Observable<any> {
    return this.http.get<Question[]>(this.url);
  }


}
