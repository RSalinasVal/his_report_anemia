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
var GridDemo = (function () {
    function GridDemo(reporteService) {
        this.reporteService = reporteService;
        this.loading = false;
        console.log('iniciando componente');
    }
    GridDemo.prototype.ngOnInit = function () {
        console.log('este es ' + this.IdReport);
        //this.people = this.getPeople();
        this.columns = this.getColumns();
        console.log('Intentando acceder...');
        //this.GetData();
    };
    GridDemo.prototype.GetData = function () {
        var _this = this;
        this.loading = true;
        if (this.IdDNI === null || this.IdDNI === '') {
            this.IdDNI = '0000';
        }
        this.reporteService.autenticarGet1(this.IdReport, this.IdAnio, this.IdEstab, this.IdDNI, this.exportar).subscribe(function (data) {
            console.log(_this.IdReport);
            // console.log(data['data']);
            console.log(_this.IdAnio);
            console.log(_this.IdEstab);
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
    GridDemo.prototype.ngOnDestroy = function () {
    };
    GridDemo.prototype.ngOnChanges = function (changes) {
        console.log('Change detected:' + this.IdReport);
        console.log('Change detected:' + this.IdReport);
        this.GetData();
    };
    GridDemo.prototype.getPeople = function () {
        return [
            { firstName: 'Joe', lastName: 'Jackson', age: 20 },
            { firstName: 'Peter', lastName: 'Smith', age: 30 },
            { firstName: 'Jane', lastName: 'Doe', age: 50 },
            { firstName: 'Tim', lastName: 'Smith', age: 80 }
        ];
    };
    GridDemo.prototype.getColumns = function () {
        return [
            new column_1.Column('EE.SS', 'DESC_ESTAB'),
            new column_1.Column('FINA', 'DESC_FINA'),
            new column_1.Column('FICHAFAM', 'FICHAFAM'),
            new column_1.Column('DNI', 'DNI'),
            new column_1.Column('SEXO', 'SEXO'),
            new column_1.Column('EDAD', 'EDAD'),
            new column_1.Column('PROF Dx', 'PROF_DX'),
            new column_1.Column('FECHA Dx', 'FECHA_DX'),
            new column_1.Column('LEV', 'ANEMIA_LEVE'),
            new column_1.Column('MOD', 'ANEMIA_MODERADO'),
            new column_1.Column('SEV', 'ANEMIA_SEVERO'),
            new column_1.Column('PROF. Rc.', 'PROF_RECUP'),
            new column_1.Column('FECHA Rc.', 'FECHA_RECUP'),
            new column_1.Column('LEV Rc.', 'ANEMIA_LEVE_RECUPERADO'),
            new column_1.Column('MOD Rc.', 'ANEMIA_MODERADO_RECUPERADO'),
            new column_1.Column('SEV Rc.', 'ANEMIA_SEVERO_RECUPERADO')
        ];
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], GridDemo.prototype, "IdReport", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], GridDemo.prototype, "IdAnio", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], GridDemo.prototype, "IdEstab", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], GridDemo.prototype, "IdDNI", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], GridDemo.prototype, "exportar", void 0);
    GridDemo = __decorate([
        core_1.Component({
            selector: 'grid-demo',
            moduleId: module.id,
            templateUrl: 'grid-demo.html',
            styleUrls: ['bootstrap.min.css', 'style.css'],
            encapsulation: core_1.ViewEncapsulation.Native
        }), 
        __metadata('design:paramtypes', [Anemia_service_1.ReporteService])
    ], GridDemo);
    return GridDemo;
}());
exports.GridDemo = GridDemo;
//# sourceMappingURL=grid-demo.js.map