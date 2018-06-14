import {Http, Response,RequestOptions,Headers} from '@angular/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { Global } from '../shared/global';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Storage } from '@ionic/storage';
import { MenuController } from 'ionic-angular';

@Injectable()
export class parentprovider {
  headers: Headers;
  options: RequestOptions;
  activeMenu : string = '';
  constructor(
    private http:Http,
    private storage: Storage,
    public menu: MenuController,
  ) {}

  public centerParentlist(parentData):Observable<any[]>{
    // let data = {
    //   // {"pageTitle":"Families","page":1,"pagesize":10,"total":0,"order":"-id","where":{"center_id":"62"}}
    //   // "center_id":centerId
    //   "pageTitle":pageTitle,
    //   "page":page,
    //   "pagesize":pagesize,
    //   "total":total,
    //   "order":order,
    //   "center_id":center_id
    // }
  
    let headers =new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post(Global.BASE_PARENTLIST, parentData, {headers: headers})
      .map((response: Response) => {
            let parentlist = response.json();
            return parentlist;
        });
  }
}
