import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { PostService } from '../services/postlists/post.service';
import { Router } from '@angular/router';
import { CrudService } from '../services/crud/crud.service';
import { log } from 'console';
import { addposts } from '../model/addposts';

@Component({
  selector: 'app-addpost',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './addpost.component.html',
  styleUrl: './addpost.component.css'
})
export class AddpostComponent {

  constructor(private serv: PostService, private router: Router, private serv2: CrudService){}

  @ViewChild('userForm')userForm:NgForm

  data : any[] = [];

  getData(){
    this.serv2.getPost().subscribe({next:(v)=>{
      console.log(v);
      this.data = v;      
    }})
  }

  onSubmit( p : addposts){
    this.serv2.addPost(p).subscribe({next: function(data){
      console.log(data);
      },error:(err)=>alert(err.message),
    complete:()=> alert('post added'),
  });

  this.getData();
  this.router.navigate(['/posts']);
  }

}
