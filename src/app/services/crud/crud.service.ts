import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { addposts } from '../../model/addposts';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private http: HttpClient) { }
  addPost(val: addposts){
    return this.http.post("http://localhost:8081/post/addpost", val);
  }

  getPost(){
    return this.http.get<addposts[]>("http://localhost:8081/post/getpost");
  }
}
