import { Component, Input,OnInit, OnDestroy,OnChanges,ViewEncapsulation } from '@angular/core';
import {Column} from '../table/column';
import {ReporteService} from "../../Services/Anemia.service";
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
declare var CSVExport:any;
@Component({
    selector:'grid-demo',
    moduleId:module.id,
    templateUrl:'grid-demo.html',
    styleUrls: ['bootstrap.min.css','style.css'],
    
    encapsulation: ViewEncapsulation.Native
})

export class GridDemo implements OnInit, OnDestroy,OnChanges {
    @Input() IdReport:string;
    @Input() IdAnio:string;
    @Input() IdEstab:string;
    @Input() IdDNI:string;
    @Input() exportar:boolean;
 
    people: Array<Person>;
    columns: Array<Column>;
    reporte: Array<String>;
    descripcion:string;
    loading:boolean=false;

    constructor(private reporteService:ReporteService){
      console.log('iniciando componente');
    
    }

    ngOnInit(){
        console.log('este es '+this.IdReport);
        //this.people = this.getPeople();
        this.columns = this.getColumns();
        console.log('Intentando acceder...');
        //this.GetData();
    }

    GetData() {
        this.loading=true;
        if(this.IdDNI===null || this.IdDNI===''){
            this.IdDNI = '0000';
        }
         this.reporteService.autenticarGet1(this.IdReport,this.IdAnio,this.IdEstab,this.IdDNI,this.exportar).subscribe(
            (data: any) => {
                console.log(this.IdReport);
               // console.log(data['data']);
                console.log(this.IdAnio);
                console.log(this.IdEstab);
                this.reporte = data['data'];
                this.descripcion = data['descripcion']+' - ('+data['anio']+')';
                this.loading=false;
                if(this.exportar){
                var x = new CSVExport(data['data']);
                this.exportar=false;
                return false;
                }
            },
            error=> { console.log(error); }
        );
        
     }

  

    ngOnDestroy(){
    }

    ngOnChanges(changes: {[ propName: string]: any}) {
        console.log('Change detected:'+this.IdReport);
        console.log('Change detected:'+this.IdReport);
        this.GetData();
    }


    getPeople(): Array<Person> {
        return [
            {firstName:'Joe',lastName:'Jackson',age:20},
            {firstName:'Peter',lastName:'Smith',age:30},
            {firstName:'Jane',lastName:'Doe',age:50},
            {firstName:'Tim',lastName:'Smith',age:80}
        ];
    }

    getColumns(): Array<Column> {
        return [
            new Column('EE.SS','DESC_ESTAB'),
            new Column('FINA','DESC_FINA'),
            new Column('FICHAFAM','FICHAFAM'),
            new Column('DNI','DNI'),
            new Column('SEXO','SEXO'),
            new Column('EDAD','EDAD'),
            new Column('PROF Dx','PROF_DX'),
            new Column('FECHA Dx','FECHA_DX'),
            new Column('LEV','ANEMIA_LEVE'),
            new Column('MOD','ANEMIA_MODERADO'),
            new Column('SEV','ANEMIA_SEVERO'),
            new Column('PROF. Rc.','PROF_RECUP'),
            new Column('FECHA Rc.','FECHA_RECUP'),
            new Column('LEV Rc.','ANEMIA_LEVE_RECUPERADO'),
            new Column('MOD Rc.','ANEMIA_MODERADO_RECUPERADO'),
            new Column('SEV Rc.','ANEMIA_SEVERO_RECUPERADO')
         
             
        ];
    }
}

interface Person {
    firstName:string;
    lastName:string;
    age:number;
}

interface RptAnual {
    descripcion:string;
    enero:number;
    febrero:number;
    marzo:number;
    abril:number;
    mayo:number;
    junio:number;
    julio:number;
    agosto:number;
    setiembre:number;
    octubre:number;
    noviembre:number;
    diciembre:number;
    total:number;
  
}
