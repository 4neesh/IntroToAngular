import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { DataService } from '../core/data.service';
import { ICustomer, IOrder, IOrderItem } from '../shared/interfaces';

@Component({
    selector: 'app-orders',
    templateUrl: './orders.component.html',
    styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

    orders: IOrder[] = [];
    customer: ICustomer; //initialise to empty

    constructor(private dataService: DataService,
        private route: ActivatedRoute) {
        this.customer = <ICustomer>{};

        //activated route allows me to obtain the current route visited (and to find the id from it)
        let id = parseInt(this.route.snapshot.paramMap.get('id') || "0"); //gets this as a string. use parseInt or add '+' in-front of this.
        this.dataService.getOrders(id).subscribe((orders: IOrder[]) => {
            this.orders = orders;
        });

        // this.dataService.getCustomers().subscribe((customer: ICustomer[])=>{
        //     this.customer = customer[1];
        // });

        this.dataService.getCustomer(id).subscribe((customer: ICustomer) => {
            this.customer = customer;
        });
        
        
    }

    ngOnInit() {



    }

}