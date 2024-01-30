import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PostlistComponent } from './components/postlist/postlist.component';
import { authGuardGuard } from './auth-guard.guard';
import { PostdetailComponent } from './components/postdetail/postdetail.component';
import { AddpostComponent } from './addpost/addpost.component';

export const routes: Routes = [
    {path: '', component: LoginComponent},
    {path: 'posts', component: PostlistComponent, canActivate:[authGuardGuard]},
    {path: 'posts/post/:id', component: PostdetailComponent},
    {path: 'add', component: AddpostComponent, canActivate:[authGuardGuard]}
];
