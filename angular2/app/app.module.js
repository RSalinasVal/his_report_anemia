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
var platform_browser_1 = require('@angular/platform-browser');
var app_component_1 = require('./Components/app/app.component');
var app_routes_1 = require('./Routes/app/app.routes');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var ninosAnemia_component_1 = require('./Components/ninosAnemia/ninosAnemia.component');
var ninosAnemiaDiag_component_1 = require('./Components/ninosAnemiaDiag/ninosAnemiaDiag.component');
var ninosAnemiaRecup_component_1 = require('./Components/ninosAnemiaRecup/ninosAnemiaRecup.component');
var gestantesAnemiaRecup_component_1 = require('./Components/gestantesAnemiaRecup/gestantesAnemiaRecup.component');
var mmn_component_1 = require('./Components/mmn/mmn.component');
var mmnGestante_component_1 = require('./Components/mmnGestante/mmnGestante.component');
var grid_1 = require('./Components/table/grid');
var grid_demo_1 = require('./Components/ninosAnemia/grid-demo');
var grid_demo2_1 = require('./Components/gestantesAnemiaRecup/grid-demo2');
var grid_demo3_1 = require('./Components/mmn/grid-demo3');
var grid_demo4_1 = require('./Components/ninosAnemiaRecup/grid-demo4');
var grid_demo5_1 = require('./Components/ninosAnemiaDiag/grid-demo5');
var grid_demo6_1 = require('./Components/mmnGestante/grid-demo6');
var Anemia_service_1 = require("./Services/Anemia.service");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, app_routes_1.routing, http_1.HttpModule],
            declarations: [
                app_component_1.AppComponent,
                ninosAnemia_component_1.ninosAnemiaComponent,
                ninosAnemiaDiag_component_1.ninosAnemiaDiagComponent,
                ninosAnemiaRecup_component_1.ninosAnemiaRecupComponent,
                gestantesAnemiaRecup_component_1.gestantesAnemiaRecupComponent,
                mmn_component_1.mmnComponent,
                mmnGestante_component_1.mmnGestanteComponent,
                grid_1.Grid,
                grid_demo_1.GridDemo,
                grid_demo2_1.GridDemo2,
                grid_demo3_1.GridDemo3,
                grid_demo4_1.GridDemo4,
                grid_demo5_1.GridDemo5,
                grid_demo6_1.GridDemo6
            ],
            bootstrap: [app_component_1.AppComponent],
            providers: [Anemia_service_1.ReporteService],
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map