import { Injectable } from '@angular/core';
import {Http, Headers,Response} from '@angular/http';
//import {AuthHttp, AuthConfig, tokenNotExpired, JwtHelper} from 'angular2-jwt';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toPromise';
 

@Injectable()
export class ReporteService {
    isLoggedIn: boolean = false;
    //jwtHelper:JwtHelper = new JwtHelper();
    headers:Headers = new Headers;

    constructor(public http:Http) {
     }

    autenticar() {
        let body = JSON.stringify({ 'name':'jesus' });
        return new Observable(() => {
            this.http.post('/api/padron',
                body,
                {
                    headers: this.headers
                }
            )
                .map(res=> res.json());

        });
        
         
    }

    autenticarGet1(IdMes:any,IdAnio:any,IdEstab:any,IdDNI:any,exportar:any):Observable<Array<any>> {
    return this.http.get('http://his.dev:8080/api/padron1/'+IdMes+'/'+IdAnio+'/'+IdEstab+'/'+IdDNI)
       // return this.http.get('/api/padron1/'+IdMes+'/'+IdAnio+'/'+IdEstab+'/'+IdDNI)
        .map(res=> res.json());
    }
    
    autenticarGet2(IdAnio:any,IdEstab:any,IdDNI:any,exportar:any):Observable<Array<any>> {
        console.log(IdAnio);
    return this.http.get('http://his.dev:8080/api/padron2/'+IdAnio+'/'+IdEstab+'/'+IdDNI)
      //  return this.http.get('/api/padron2/'+IdAnio+'/'+IdEstab+'/'+IdDNI)
                .map(res=> res.json());

    }
    
    autenticarGet3(IdMes:any,IdAnio:any,IdEstab:any,IdDNI:any,exportar:any):Observable<Array<any>> {
        console.log(IdAnio);
      return this.http.get('http://his.dev:8080/api/padron3/'+IdMes+'/'+IdAnio+'/'+IdEstab+'/'+IdDNI)
       // return this.http.get('/api/padron3/'+IdMes+'/'+IdAnio+'/'+IdEstab+'/'+IdDNI)
                .map(res=> res.json());

    }
    
        autenticarGet4(IdMes:any,IdAnio:any,exportar:any):Observable<Array<any>> {
        console.log(IdAnio);
        return this.http.get('http://his.dev:8080/api/padron4/'+IdMes+'/'+IdAnio)
        //return this.http.get('/api/padron4/'+IdMes+'/'+IdAnio)
                .map(res=> res.json());

    }  
         autenticarGet5(IdMes:any,IdAnio:any,exportar:any):Observable<Array<any>> {
        console.log(IdAnio);
       return this.http.get('http://his.dev:8080/api/padron5/'+IdMes+'/'+IdAnio)
      // return this.http.get('/api/padron5/'+IdMes+'/'+IdAnio)
                .map(res=> res.json());

    }     
    autenticarGet6(IdMes:any,IdAnio:any,IdEstab:any,IdDNI:any,exportar:any):Observable<Array<any>> {
        console.log(IdAnio);
     return this.http.get('http://his.dev:8080/api/padron6/'+IdMes+'/'+IdAnio+'/'+IdEstab+'/'+IdDNI)
    //return this.http.get('/api/padron6/'+IdMes+'/'+IdAnio+'/'+IdEstab+'/'+IdDNI)
                .map(res=> res.json());

    }       
    getSecretQuote():Observable<Array<any>> {
        let body = JSON.stringify({ 'name':'jesus' });
        return this.http.post('http://his.dev:8080/api/autenticar', body, { headers: this.headers })
       // return this.http.post('/api/autenticar', body, { headers: this.headers })
            .map(res=>this.extractData(res));
    }

    private extractData(res: Response) {
        window.localStorage.setItem('id_token','secret');
        this.isLoggedIn=true;
        console.log('extra');
        console.log(res);
        let body = res.json();
        //return body.data || { };
        return body;
    }

    logout() {
        this.isLoggedIn = false;
    }
}
