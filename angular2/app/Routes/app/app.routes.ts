import { Routes, RouterModule }  from '@angular/router';
import {ninosAnemiaRoutes} from '../ninosAnemia/ninosAnemia.routes';
import {ReportesAnemiaSoloDxRoutes} from '../ninosAnemiaDiag/ninosAnemiaDiag.routes';
import {ReportesAnemiaRecupRoutes} from '../ninosAnemiaRecup/ninosAnemiaRecup.routes';
import {ReportesGestantesRoutes} from '../gestabtesAnemiaRecup/gestantesAnemiaRecup.routes';
import {ReportesMMNRoutes} from '../mmn/mmn.routes';
import {ReportesMmnGestanteRoutes} from '../mmnGestante/mmn.routes';


export const appRoutes: Routes = [
    ...ninosAnemiaRoutes,
    ...ReportesAnemiaSoloDxRoutes,
    ...ReportesAnemiaRecupRoutes,
    ...ReportesGestantesRoutes,
    ...ReportesMMNRoutes,
    ...ReportesMmnGestanteRoutes
];

export const routing = RouterModule.forRoot(appRoutes);
