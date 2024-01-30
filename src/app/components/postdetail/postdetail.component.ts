import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterModule, RouterOutlet } from '@angular/router';
import { PostlistComponent } from '../postlist/postlist.component';
import { CrudService } from '../../services/crud/crud.service';
import { addposts } from '../../model/addposts';

@Component({
  selector: 'app-postdetail',
  standalone: true,
  imports: [FormsModule, RouterModule, RouterOutlet, CommonModule],
  templateUrl: './postdetail.component.html',
  styleUrl: './postdetail.component.css'
})
export class PostdetailComponent implements OnInit{

  constructor(private serv: PostlistComponent, private serv2: CrudService, private route: ActivatedRoute){}
  ngOnInit(): void {
    this.pID = this.route.snapshot.params['id'];
    this.getdata();
    this.cards = this.data.find((x)=> x.id == this.pID);
  }
  

  cards : any = [];
  data : addposts[] = [];

  pID: any = 0;

  getdata(){
    this.serv2.getPost().subscribe({next:(v)=>{
      console.log(v);
      this.data = v;
    }});

  }

}
