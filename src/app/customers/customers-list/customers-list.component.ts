import { Component, OnInit, Input } from '@angular/core';
import { ICustomer } from 'src/app/shared/interfaces';
import { SorterService } from 'src/app/core/sorter.service'
@Component({

    selector: 'app-customers-list',
    templateUrl: './customers-list.component.html'

})

export class CustomersListComponent implements OnInit {

    private _unfilteredCustomers: ICustomer[] = [];
    @Input() get unfilteredCustomers(): ICustomer[] {
        return this._unfilteredCustomers;
    }

    set unfilteredCustomers(value: ICustomer[]) {

        this.filteredCustomers = this._unfilteredCustomers = value;
        this.calculateOrders();
    }

    filteredCustomers: ICustomer[];
    customersOrderTotal: number;
    currencyCode: string = 'USD';

    constructor(private sorterService: SorterService) {
        this.filteredCustomers = []
        this.customersOrderTotal = 0;
    }

    ngOnInit() {

    }
    calculateOrders() {
        this.customersOrderTotal = 0;
        this.filteredCustomers.forEach((customer: ICustomer) => {
            customer.orderTotal = customer.orderTotal || 0;
            this.customersOrderTotal += customer.orderTotal;
        });
    }

    sort(prop: string) {
        // A sorter service will handle the sorting
        this.sorterService.sort(this.filteredCustomers, prop);
    }

    filter(data: string) {
        if (data) {
            this.filteredCustomers = this.unfilteredCustomers.filter((customer: ICustomer) => {
                customer.orderTotal = customer.orderTotal || 0;
                return customer.name.toLowerCase().indexOf(data.toLowerCase()) > -1 ||
                    customer.city.toLowerCase().indexOf(data.toLowerCase()) > -1 ||
                    customer.orderTotal.toString().indexOf(data) > -1;
            });
        } else {
            this.filteredCustomers = this.unfilteredCustomers;
        }
        this.calculateOrders();
    }

}