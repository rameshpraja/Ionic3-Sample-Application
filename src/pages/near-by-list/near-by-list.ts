import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NativeGoogleMapsProvider } from '../../providers/native-google-maps/native-google-maps';
/**
 * Generated class for the ParentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'near-by-list',
  templateUrl: 'near-by-list.html',
})
export class NearbylistPage {
  mapLists: any = [];
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private _MapsProvider: NativeGoogleMapsProvider) {
  }

  ionViewDidLoad() {
    let latLng = {
      "latitude":42.743784000,
      "longitude":-83.379797000
    };
    this._MapsProvider.centerMap(latLng).subscribe((centerMaps:any)=>{
      if(centerMaps.status){
        centerMaps.data.center_data.filter((centerMapData)=>{   
            this.mapLists.push(centerMapData);
        });
        console.log(this.mapLists);
      }
    });
    console.log('ionViewDidLoad ParentPage');
  }

}
