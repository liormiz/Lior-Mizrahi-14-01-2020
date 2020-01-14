import { NgModule } from '@angular/core';
import {
    MatAutocompleteModule,
    MatInputModule,
    MatToolbarModule, 
    MatIconModule, 
    MatSidenavModule, 
    MatListModule, 
    MatButtonModule,
    MatCardModule,
} from '@angular/material';

@NgModule({
    imports:[
        MatAutocompleteModule,
        MatInputModule,
        MatToolbarModule, 
        MatIconModule, 
        MatSidenavModule, 
        MatListModule, 
        MatButtonModule,
        MatCardModule
    ],
    exports: [
        MatAutocompleteModule,
        MatInputModule,
        MatToolbarModule, 
        MatIconModule, 
        MatSidenavModule, 
        MatListModule, 
        MatButtonModule,
        MatCardModule
    ]
})

export class AngularMaterialModule { }