import { NgModule } from '@angular/core';
import {
    MatAutocompleteModule,
    MatInputModule,
    MatToolbarModule, 
    MatIconModule, 
    MatSidenavModule, 
    MatListModule, 
    MatButtonModule
} from '@angular/material';

@NgModule({
    //imports: [MatAutocompleteModule,MatInputModule],
    //exports: [MatAutocompleteModule,MatInputModule]
    imports:[
        MatAutocompleteModule,
        MatInputModule,
        MatToolbarModule, 
        MatIconModule, 
        MatSidenavModule, 
        MatListModule, 
        MatButtonModule
    ],
    exports: [
        MatAutocompleteModule,
        MatInputModule,
        MatToolbarModule, 
        MatIconModule, 
        MatSidenavModule, 
        MatListModule, 
        MatButtonModule
    ]
})

export class AngularMaterialModule { }