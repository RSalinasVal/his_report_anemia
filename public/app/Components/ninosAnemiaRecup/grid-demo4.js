"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var column_1 = require('../table/column');
var Anemia_service_1 = require("../../Services/Anemia.service");
require('rxjs/add/operator/map');
require('rxjs/add/operator/catch');
var GridDemo4 = (function () {
    function GridDemo4(reporteService) {
        this.reporteService = reporteService;
        this.loading = false;
        console.log('iniciando componente');
    }
    GridDemo4.prototype.ngOnInit = function () {
        console.log('este es ' + this.IdReport);
        //this.people = this.getPeople();
        this.columns = this.getColumns();
        console.log('Intentando acceder...');
        //this.GetData();
    };
    GridDemo4.prototype.GetData = function () {
        var _this = this;
        this.loading = true;
        this.reporteService.autenticarGet4(this.IdReport, this.IdAnio, this.exportar).subscribe(function (data) {
            console.log(_this.IdReport);
            console.log(data['data']);
            console.log(_this.IdAnio);
            _this.reporte = data['data'];
            _this.descripcion = data['descripcion'] + ' - (' + data['anio'] + ')';
            _this.loading = false;
            if (_this.exportar) {
                var x = new CSVExport(data['data']);
                _this.exportar = false;
                return false;
            }
        }, function (error) { console.log(error); });
    };
    GridDemo4.prototype.ngOnDestroy = function () {
    };
    GridDemo4.prototype.ngOnChanges = function (changes) {
        console.log('Change detected:' + this.IdReport);
        console.log('Change detected:' + this.IdReport);
        this.GetData();
    };
    GridDemo4.prototype.getPeople = function () {
        return [
            { firstName: 'Joe', lastName: 'Jackson', age: 20 },
            { firstName: 'Peter', lastName: 'Smith', age: 30 },
            { firstName: 'Jane', lastName: 'Doe', age: 50 },
            { firstName: 'Tim', lastName: 'Smith', age: 80 }
        ];
    };
    GridDemo4.prototype.getColumns = function () {
        return [
            new column_1.Column('EE.SS', 'DESC_ESTAB'),
            new column_1.Column('FICHAFAM', 'FICHAFAM'),
            new column_1.Column('DNI', 'DNI'),
            new column_1.Column('SEXO', 'SEXO'),
            new column_1.Column('EDAD', 'ED'),
            new column_1.Column('PROF. Rc', 'PROF_RC'),
            new column_1.Column('FECHA Rc', 'FECHA_RC'),
            new column_1.Column('LEV Rc.', 'ANEMIA_LEVE_RECUPERADO'),
            new column_1.Column('MOD Rc.', 'ANEMIA_MODERADO_RECUPERADO'),
            new column_1.Column('SEV Rc.', 'ANEMIA_SEVERO_RECUPERADO'),
            new column_1.Column('TOTAL', 'TOTAL')
        ];
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], GridDemo4.prototype, "IdReport", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], GridDemo4.prototype, "IdAnio", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], GridDemo4.prototype, "exportar", void 0);
    GridDemo4 = __decorate([
        core_1.Component({
            selector: 'grid-demo4',
            moduleId: module.id,
            templateUrl: 'grid-demo.html'
        }), 
        __metadata('design:paramtypes', [Anemia_service_1.ReporteService])
    ], GridDemo4);
    return GridDemo4;
}());
exports.GridDemo4 = GridDemo4;
