import { Component, OnInit, OnDestroy,Input } from '@angular/core';
import { Router } from '@angular/router';
//import { Hero, HeroService }  from '../../services/heroes/hero.service';

@Component({
    moduleId:module.id,
    templateUrl: 'ninosAnemia.html'
})

//export class ReporteAnemiaListComponent implements OnInit, OnDestroy {
export class ninosAnemiaComponent {
   // heroes: Hero[];
    private sub: any;
    selectedId: number;
    private IdMes:string='105';
    private  IdAnio:string='2016';
    private  IdEstab:string='000002818';
    private  IdDNI:string='00000';
    private  exportar:boolean=false;
 
    anio: string='2016';
    edad: string='105';
    estab: string='000002818';
    dni: string='00000';
    exp:  boolean=false;
    
    constructor(
     //   private service: HeroService,
        private router: Router
    ) {}

    hacerConsulta(){


        //alert(this.edad + " " + this.anio);
        this.IdMes = this.edad;
        this.IdAnio=this.anio;
        this.IdEstab=this.estab;
        this.IdDNI=this.dni;
        this.exportar=false;

    }


    ExportarXLS(){
 
        this.IdMes = this.edad;
        this.IdAnio=this.anio;
        this.IdEstab=this.estab;
      

        this.exportar=true;
 
    }
    
    
   
   
 
}
