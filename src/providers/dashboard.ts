import {Http, Response,RequestOptions,Headers} from '@angular/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { Global } from '../shared/global';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Storage } from '@ionic/storage';
import { MenuController } from 'ionic-angular';

@Injectable()
export class DashboardProvider {
  headers: Headers;
  options: RequestOptions;
  activeMenu : string = '';
  constructor(
    private http:Http,
    private storage: Storage,
    public menu: MenuController,
  ) {}

  public centerDashboardChart(centerId):Observable<any[]>{
    let data = {
      "center_id":centerId
    }
    //this.currentUser.role_id = data.role_id;
    let headers =new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post(Global.BASE_DASHBOARD, data, {headers: headers})
      .map((response: Response) => {
            let chartData = response.json();
            return chartData;
        });
  }
}
