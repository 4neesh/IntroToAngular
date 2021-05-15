import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'filter-textbox',
    template: `
        Filter: <input type="text" [(ngModel)]="filter"/>
    `
})

export class FilterTextBox implements OnInit {

    private _filter: string;
    @Input() get filter() {
        return this._filter;
    }

    set filter(val: string) {
        this._filter = val;
        this.changed.emit(this.filter); //notifies parent of what is typed so it can then filter
    }

    @Output() changed = new EventEmitter<string>();


    constructor() {
        this._filter = "";
    }

    ngOnInit() { }
}