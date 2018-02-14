import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';


@Injectable()
export class ServerService {
    constructor(private http: Http){}
    storeServers(servers:any[]) {
       return this.http.post('https://udemy-ng-http-7f9a3.firebaseio.com/data.json',servers);
    }

    getServers() {
        return this.http.get('https://udemy-ng-http-7f9a3.firebaseio.com/data.json')
        .map(
            (response:Response) =>
    {
        const data = response.json();
        for(let server of data){
            server.name = 'fetched' + server.name;
        }
        return data;
    }
    );
    }

    getAppName() {
        return this.http.get('https://udemy-ng-http-7f9a3.firebaseio.com/appName.json')
        .map(
            (response: Response) => {
                return response.json();
            }
        );
    }
}