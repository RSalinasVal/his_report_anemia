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
var GridDemo6 = (function () {
    function GridDemo6(reporteService) {
        this.reporteService = reporteService;
        this.loading = false;
        console.log('iniciando componente');
    }
    GridDemo6.prototype.ngOnInit = function () {
        console.log('este es ' + this.IdReport);
        //this.people = this.getPeople();
        this.columns = this.getColumns();
        console.log('Intentando acceder...');
        //this.GetData();
    };
    GridDemo6.prototype.GetData = function () {
        var _this = this;
        this.loading = true;
        if (this.IdDNI === null || this.IdDNI === '') {
            this.IdDNI = '0000';
        }
        this.reporteService.autenticarGet6(this.IdReport, this.IdAnio, this.IdEstab, this.IdDNI, this.exportar).subscribe(function (data) {
            console.log(_this.IdReport);
            console.log(data['data']);
            console.log(_this.IdAnio);
            _this.reporte = data['data'];
            _this.descripcion = data['descripcion'] + ' - (' + data['anio'] + ')';
            _this.loading = false;
            if (_this.exportar) {
                var x = new CSVExport(data['data']);
                _this.exportar = true;
                return false;
            }
        }, function (error) { console.log(error); });
    };
    GridDemo6.prototype.ngOnDestroy = function () {
    };
    GridDemo6.prototype.ngOnChanges = function (changes) {
        console.log('Change detected:' + this.IdReport);
        console.log('Change detected:' + this.IdReport);
        this.GetData();
    };
    GridDemo6.prototype.getPeople = function () {
        return [
            { firstName: 'Joe', lastName: 'Jackson', age: 20 },
            { firstName: 'Peter', lastName: 'Smith', age: 30 },
            { firstName: 'Jane', lastName: 'Doe', age: 50 },
            { firstName: 'Tim', lastName: 'Smith', age: 80 }
        ];
    };
    GridDemo6.prototype.getColumns = function () {
        return [
            new column_1.Column('EE.SS', 'DESC_ESTAB'),
            new column_1.Column('FINA', 'DESC_FINA'),
            new column_1.Column('FICHAFAM', 'FICHAFAM'),
            new column_1.Column('DNI', 'DNI'),
            new column_1.Column('SEXO', 'SEXO'),
            new column_1.Column('EDAD', 'ED'),
            new column_1.Column('AF1', 'AF1'),
            new column_1.Column('AF2', 'AF2'),
            new column_1.Column('AF3', 'AF3'),
            new column_1.Column('SF1', 'SF1'),
            new column_1.Column('SF2', 'SF2'),
            new column_1.Column('SF3', 'SF3'),
            new column_1.Column('SF4', 'SF4'),
            new column_1.Column('SF5', 'SF5'),
            new column_1.Column('SF6', 'SF6'),
            new column_1.Column('SF7', 'SF7')
        ];
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], GridDemo6.prototype, "IdReport", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], GridDemo6.prototype, "IdAnio", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], GridDemo6.prototype, "IdEstab", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], GridDemo6.prototype, "IdDNI", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], GridDemo6.prototype, "exportar", void 0);
    GridDemo6 = __decorate([
        core_1.Component({
            selector: 'grid-demo6',
            moduleId: module.id,
            templateUrl: 'grid-demo.html',
            styleUrls: ['../../../css/bootstrap.min.css', 'style.css'],
            encapsulation: core_1.ViewEncapsulation.Native
        }), 
        __metadata('design:paramtypes', [Anemia_service_1.ReporteService])
    ], GridDemo6);
    return GridDemo6;
}());
exports.GridDemo6 = GridDemo6;
//# sourceMappingURL=grid-demo6.js.map