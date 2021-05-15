import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersComponent } from './customers.component';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { FilterTextBox } from './customers-list/filter-textbox.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms'
import { CustomersRoutingModule } from './customers-routing.module'

@NgModule({
  declarations: [CustomersComponent, CustomersListComponent, FilterTextBox], //make components from this module available to others 
  imports: [CommonModule, SharedModule, FormsModule, CustomersRoutingModule], //imports make these components from other components available to this component. import customer routing module to load it. 
  exports: [CustomersComponent]
})
export class CustomersModule { }
