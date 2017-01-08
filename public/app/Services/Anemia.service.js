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
var http_1 = require('@angular/http');
//import {AuthHttp, AuthConfig, tokenNotExpired, JwtHelper} from 'angular2-jwt';
var Observable_1 = require('rxjs/Observable');
require('rxjs/add/observable/of');
require('rxjs/add/operator/do');
require('rxjs/add/operator/delay');
require('rxjs/add/observable/throw');
require('rxjs/add/operator/catch');
require('rxjs/add/operator/debounceTime');
require('rxjs/add/operator/distinctUntilChanged');
require('rxjs/add/operator/map');
require('rxjs/add/operator/switchMap');
require('rxjs/add/operator/toPromise');
var ReporteService = (function () {
    function ReporteService(http) {
        this.http = http;
        this.isLoggedIn = false;
        //jwtHelper:JwtHelper = new JwtHelper();
        this.headers = new http_1.Headers;
    }
    ReporteService.prototype.autenticar = function () {
        var _this = this;
        var body = JSON.stringify({ 'name': 'jesus' });
        return new Observable_1.Observable(function () {
            _this.http.post('/api/padron', body, {
                headers: _this.headers
            })
                .map(function (res) { return res.json(); });
        });
    };
    ReporteService.prototype.autenticarGet1 = function (IdMes, IdAnio, IdEstab, IdDNI, exportar) {
        //return this.http.get('http://his.dev:8080/api/padron1/'+IdMes+'/'+IdAnio+'/'+IdEstab+'/'+IdDNI)
        return this.http.get('/api/padron1/' + IdMes + '/' + IdAnio + '/' + IdEstab + '/' + IdDNI)
            .map(function (res) { return res.json(); });
    };
    ReporteService.prototype.autenticarGet2 = function (IdAnio, IdEstab, IdDNI, exportar) {
        console.log(IdAnio);
        //return this.http.get('http://his.dev:8080/api/padron2/'+IdAnio+'/'+IdEstab+'/'+IdDNI)
        return this.http.get('/api/padron2/' + IdAnio + '/' + IdEstab + '/' + IdDNI)
            .map(function (res) { return res.json(); });
    };
    ReporteService.prototype.autenticarGet3 = function (IdMes, IdAnio, IdEstab, IdDNI, exportar) {
        console.log(IdAnio);
        // return this.http.get('http://his.dev:8080/api/padron3/'+IdMes+'/'+IdAnio+'/'+IdEstab+'/'+IdDNI)
        return this.http.get('/api/padron3/' + IdMes + '/' + IdAnio + '/' + IdEstab + '/' + IdDNI)
            .map(function (res) { return res.json(); });
    };
    ReporteService.prototype.autenticarGet4 = function (IdMes, IdAnio, exportar) {
        console.log(IdAnio);
        //  return this.http.get('http://his.dev:8080/api/padron4/'+IdMes+'/'+IdAnio)
        return this.http.get('/api/padron4/' + IdMes + '/' + IdAnio)
            .map(function (res) { return res.json(); });
    };
    ReporteService.prototype.autenticarGet5 = function (IdMes, IdAnio, exportar) {
        console.log(IdAnio);
        // return this.http.get('http://his.dev:8080/api/padron5/'+IdMes+'/'+IdAnio)
        return this.http.get('/api/padron5/' + IdMes + '/' + IdAnio)
            .map(function (res) { return res.json(); });
    };
    ReporteService.prototype.autenticarGet6 = function (IdMes, IdAnio, IdEstab, IdDNI, exportar) {
        console.log(IdAnio);
        // return this.http.get('http://his.dev:8080/api/padron6/'+IdMes+'/'+IdAnio+'/'+IdEstab+'/'+IdDNI)
        return this.http.get('/api/padron6/' + IdMes + '/' + IdAnio + '/' + IdEstab + '/' + IdDNI)
            .map(function (res) { return res.json(); });
    };
    ReporteService.prototype.getSecretQuote = function () {
        var _this = this;
        var body = JSON.stringify({ 'name': 'jesus' });
        return this.http.post('http://his.dev:8080/api/autenticar', body, { headers: this.headers })
            .map(function (res) { return _this.extractData(res); });
    };
    ReporteService.prototype.extractData = function (res) {
        window.localStorage.setItem('id_token', 'secret');
        this.isLoggedIn = true;
        console.log('extra');
        console.log(res);
        var body = res.json();
        //return body.data || { };
        return body;
    };
    ReporteService.prototype.logout = function () {
        this.isLoggedIn = false;
    };
    ReporteService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ReporteService);
    return ReporteService;
}());
exports.ReporteService = ReporteService;
//# sourceMappingURL=Anemia.service.js.map