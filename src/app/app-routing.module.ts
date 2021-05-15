import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {path:'', pathMatch:'full', redirectTo:'/customers'}, //route for the root of the website. full = match on everything written in url.
  { path: '**', pathMatch: 'full', redirectTo: '/customers' } //matches all other requests. These two routes are processed sequentially. 
];
//this auto-generated module allows us to use routing. 

@NgModule({
  imports: [RouterModule.forRoot(routes)], //this registers the routes from the const above with angular. 
  exports: [RouterModule] //makes the bucket of tools available to any other components. Exports = making something public
})
export class AppRoutingModule { } //this is the name of the module imported
