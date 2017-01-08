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
var router_1 = require('@angular/router');
//import { Hero, HeroService }  from '../../services/heroes/hero.service';
var ninosAnemiaDiagComponent = (function () {
    function ninosAnemiaDiagComponent(
        //   private service: HeroService,
        router) {
        this.router = router;
        this.IdMes = '105';
        this.IdAnio = '2016';
        this.exportar = false;
        this.anio = '2016';
        this.edad = '105';
        this.exp = false;
    }
    ninosAnemiaDiagComponent.prototype.hacerConsulta = function () {
        //alert(this.edad + " " + this.anio);
        this.IdMes = this.edad;
        this.IdAnio = this.anio;
    };
    ninosAnemiaDiagComponent.prototype.ExportarXLS = function () {
        this.IdMes = this.edad;
        this.IdAnio = this.anio;
        this.exportar = true;
    };
    ninosAnemiaDiagComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: 'ninosAnemiaDiag.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], ninosAnemiaDiagComponent);
    return ninosAnemiaDiagComponent;
}());
exports.ninosAnemiaDiagComponent = ninosAnemiaDiagComponent;
