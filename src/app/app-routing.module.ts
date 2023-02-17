import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtformsComponent } from './pages/artforms/artforms.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';
import { SinglepageComponent } from './pages/singlepage/singlepage.component';

const routes: Routes = [{

  path:'',component:HomepageComponent

},
{
  path:'contacts',component:ContactsComponent
},
{
  path:'signup',component:SignupComponent
},
{
  path:'signin',component:SigninComponent
},
{
  path:'artforms',component:ArtformsComponent
},
{
  path:'singlepage',component:SinglepageComponent
}]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
