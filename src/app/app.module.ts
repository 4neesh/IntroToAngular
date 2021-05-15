import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { CustomersModule } from './customers/customers.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module'
import { CoreModule } from './core/core.module'
import { OrdersModule } from './orders/orders.module'

@NgModule({

  imports: [
    BrowserModule,
    CustomersModule,
    OrdersModule,
    SharedModule,
    CoreModule,
    AppRoutingModule

  ], //imports make the above modules + services publicly available within the application 
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent] //the first component loaded upon startup
})
export class AppModule { }
