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
var gestantesAnemiaRecupComponent = (function () {
    function gestantesAnemiaRecupComponent(
        //   private service: HeroService,
        router) {
        this.router = router;
        this.IdMes = '101';
        this.IdAnio = '2016';
        this.IdEstab = '000002818';
        this.IdDNI = '00000';
        this.exportar = false;
        this.anio = '2016';
        this.estab = '000002818';
        this.dni = '00000';
        this.exp = false;
    }
    gestantesAnemiaRecupComponent.prototype.hacerConsulta = function () {
        //alert(this.edad + " " + this.anio);
        this.IdAnio = this.anio;
        this.IdEstab = this.estab;
        this.IdDNI = this.dni;
        this.exportar = false;
    };
    gestantesAnemiaRecupComponent.prototype.ExportarXLS = function () {
        this.IdAnio = this.anio;
        this.IdEstab = this.estab;
        this.exportar = true;
    };
    gestantesAnemiaRecupComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: 'gestantesAnemiaRecup.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], gestantesAnemiaRecupComponent);
    return gestantesAnemiaRecupComponent;
}());
exports.gestantesAnemiaRecupComponent = gestantesAnemiaRecupComponent;
