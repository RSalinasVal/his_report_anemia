"use strict";
var router_1 = require('@angular/router');
var ninosAnemia_routes_1 = require('../ninosAnemia/ninosAnemia.routes');
var ninosAnemiaDiag_routes_1 = require('../ninosAnemiaDiag/ninosAnemiaDiag.routes');
var ninosAnemiaRecup_routes_1 = require('../ninosAnemiaRecup/ninosAnemiaRecup.routes');
var gestantesAnemiaRecup_routes_1 = require('../gestabtesAnemiaRecup/gestantesAnemiaRecup.routes');
var mmn_routes_1 = require('../mmn/mmn.routes');
var mmn_routes_2 = require('../mmnGestante/mmn.routes');
exports.appRoutes = ninosAnemia_routes_1.ninosAnemiaRoutes.concat(ninosAnemiaDiag_routes_1.ReportesAnemiaSoloDxRoutes, ninosAnemiaRecup_routes_1.ReportesAnemiaRecupRoutes, gestantesAnemiaRecup_routes_1.ReportesGestantesRoutes, mmn_routes_1.ReportesMMNRoutes, mmn_routes_2.ReportesMmnGestanteRoutes);
exports.routing = router_1.RouterModule.forRoot(exports.appRoutes);
//# sourceMappingURL=app.routes.js.map