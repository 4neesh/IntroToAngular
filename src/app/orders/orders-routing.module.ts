import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OrdersComponent } from './orders.component';

const routes: Routes = [
    { path: 'orders/:id', component: OrdersComponent} //the colon tells you it is a variable. id could be anything really. 
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ], 
    exports: [ RouterModule ]
})
export class OrdersRoutingModule {

}