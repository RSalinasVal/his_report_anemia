import { Component, Input,OnInit, OnDestroy,OnChanges,ViewEncapsulation } from '@angular/core';
import {Column} from '../table/column';
import {ReporteService} from "../../Services/Anemia.service";
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
declare var CSVExport:any;

@Component({
    selector:'grid-demo6',
     moduleId:module.id,
    templateUrl:'grid-demo.html',
    styleUrls: ['../../../css/bootstrap.min.css','style.css'],
    encapsulation: ViewEncapsulation.Native
})

export class GridDemo6 implements OnInit, OnDestroy,OnChanges {
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
        this.reporteService.autenticarGet6(this.IdReport,this.IdAnio,this.IdEstab,this.IdDNI,this.exportar).subscribe(
            data => {
                console.log(this.IdReport);
                console.log(data['data']);
                console.log(this.IdAnio);
                this.reporte = data['data'];
                this.descripcion = data['descripcion']+' - ('+data['anio']+')';
                this.loading=false;
                if(this.exportar){
                var x = new CSVExport(data['data']);
                this.exportar=true;
                return false;} 
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
            new Column('EDAD','ED'),
            new Column('AF1','AF1'),
            new Column('AF2','AF2'),
            new Column('AF3','AF3'),
            new Column('SF1','SF1'),
            new Column('SF2','SF2'),
            new Column('SF3','SF3'),
            new Column('SF4','SF4'),
            new Column('SF5','SF5'),
            new Column('SF6','SF6'),
            new Column('SF7','SF7') 
           
       
 
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
