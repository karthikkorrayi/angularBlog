import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { PostlistComponent } from './components/postlist/postlist.component';
import { PostdetailComponent } from './components/postdetail/postdetail.component';
import { AddpostComponent } from './addpost/addpost.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule, HeaderComponent, RouterModule, PostlistComponent, PostdetailComponent, AddpostComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FrontendBlog';
}
