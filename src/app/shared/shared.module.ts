import { NgModule } from '@angular/core';
import { CapitalizePipe } from './capitalise.pipe'
@NgModule({

    declarations: [CapitalizePipe],
    exports: [CapitalizePipe]
})

export class SharedModule{
    
}