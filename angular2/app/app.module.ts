import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './Components/app/app.component';
import { routing } from './Routes/app/app.routes';
import {RouterModule} from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';



import {ninosAnemiaComponent} from './Components/ninosAnemia/ninosAnemia.component';
import {ninosAnemiaDiagComponent} from './Components/ninosAnemiaDiag/ninosAnemiaDiag.component';
import{ninosAnemiaRecupComponent} from './Components/ninosAnemiaRecup/ninosAnemiaRecup.component';
import{gestantesAnemiaRecupComponent} from './Components/gestantesAnemiaRecup/gestantesAnemiaRecup.component';
import {mmnComponent} from './Components/mmn/mmn.component';
import {mmnGestanteComponent} from './Components/mmnGestante/mmnGestante.component';
import {Grid} from './Components/table/grid';  
import { GridDemo } from './Components/ninosAnemia/grid-demo';
import {GridDemo2} from './Components/gestantesAnemiaRecup/grid-demo2';
import {GridDemo3} from './Components/mmn/grid-demo3';
import {GridDemo4} from './Components/ninosAnemiaRecup/grid-demo4';
import {GridDemo5} from './Components/ninosAnemiaDiag/grid-demo5';
import {GridDemo6} from './Components/mmnGestante/grid-demo6';
import {ReporteService} from "./Services/Anemia.service";

@NgModule({
  imports:      [ BrowserModule, FormsModule, routing, HttpModule ],
  declarations: [ 
    AppComponent,
    ninosAnemiaComponent,
    ninosAnemiaDiagComponent,
    ninosAnemiaRecupComponent,
    gestantesAnemiaRecupComponent,
    mmnComponent,
    mmnGestanteComponent,
    Grid,
    GridDemo, 
    GridDemo2, 
    GridDemo3,
    GridDemo4, 
    GridDemo5, 
    GridDemo6 
    ],
  bootstrap:    [ AppComponent ],
  providers:    [ReporteService],

})
export class AppModule { }
