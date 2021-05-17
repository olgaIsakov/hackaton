import { HomeComponent } from './home/home.component';
import { SubmitPostComponent } from './submit-post/submit-post.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Register all pages:
const routes: Routes = [{path: '' , component: HomeComponent},
  {path: 'Home' , component: HomeComponent},
{path: 'SignIn' , component: SignInComponent},
{path: 'SignUp' , component: SignUpComponent},
{path: 'AddPost' , component: SubmitPostComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
