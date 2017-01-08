import {Component, Input, OnInit, ViewEncapsulation,Pipe} from '@angular/core';
import {Column} from './column';
import {Sorter} from './sorter';
 
 

 

 
 

@Component({
    selector: 'grid',
    moduleId:module.id, 
      templateUrl: 'grid.html',
    styleUrls: ['style.css'],
    encapsulation: ViewEncapsulation.None
})



export class Grid implements OnInit {
  birthday = new Date(1988, 3, 15); // April 15, 1988

    @Input() columns:Array<Column>;
    @Input() rows:Array<any>;

    @Input() name:string;

    sorter = new Sorter();

    sort(key:string){
        this.sorter.sort(key, this.rows);
    }

    ngOnInit(){
        console.log(this.name);
    }
}
