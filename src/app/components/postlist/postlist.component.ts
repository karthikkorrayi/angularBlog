import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PostService } from '../../services/postlists/post.service';
import { CrudService } from '../../services/crud/crud.service';

@Component({
  selector: 'app-postlist',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './postlist.component.html',
  styleUrl: './postlist.component.css'
})
export class PostlistComponent implements OnInit{

  constructor(private serv: PostService, private serv2: CrudService){}


  lists: any[] = [];
  
  ngOnInit(): void {
    this.getData();
  }


  getData(){
    this.serv2.getPost().subscribe({next:(v)=>{
      console.log(v);
      this.lists = v;
    }})
  }

}
