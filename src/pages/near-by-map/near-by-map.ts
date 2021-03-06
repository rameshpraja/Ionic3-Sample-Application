import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import {
  CameraPosition,
  GoogleMap,
  GoogleMapOptions,
  GoogleMaps,
  GoogleMapsAnimation,
  GoogleMapsEvent,
  GoogleMapsMapTypeId,
  LatLng,
  Marker,
  MarkerOptions
} from '@ionic-native/google-maps';
import { Geolocation } from '@ionic-native/geolocation';

import { NativeGoogleMapsProvider } from '../../providers/native-google-maps/native-google-maps';

declare var google;

@IonicPage()
@Component({
  selector: 'page-near-by-map',
  templateUrl: 'near-by-map.html',
})
export class NearbymapPage {
  @ViewChild('map') mapElement: ElementRef;
  map:GoogleMap;
  mapLists : any = '';
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public platform: Platform,
    private _googleMaps : GoogleMaps,
    public geolocation: Geolocation,
    private _MapsProvider: NativeGoogleMapsProvider
  ) {
    this.mapLists = 'nearByMap';
  }

   // Load map only after view is initialized
   ngAfterViewInit() {}

  ionViewDidLoad() {
    this.initMap();
  }
  // notify(test){
  //   console.log('test');
  //   console.log(test.value);
  //   if(test.value == 'nearByMap'){
  //     this.initMap();
  //   }
  //}


  initMap(){
    this.geolocation.getCurrentPosition().then((position) => {
      let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

      let latLng2 = {
        "latitude":42.743784000,
        "longitude":-83.379797000
      };

      this._MapsProvider.centerMap(latLng2).subscribe((centerMaps:any)=>{
          if(centerMaps.status){
              let mapOptions = {
                'controls': {
                  'compass': true,
                  'myLocationButton': true,
                  'indoorPicker': true,
                  'zoom': true,
                },
                'gestures': {
                  'scroll': true,
                  'tilt': true,
                  'rotate': true,
                  'zoom': true
                },
                'camera': {
                  'target': {
                    'lat': position.coords.latitude,  // geolocation latittude
                    'lng': position.coords.longitude // geolocation longitute
                  },
                  'tilt': 30,
                  'zoom': 10,
                  'bearing': 50
                },
                center: latLng,
                zoom: 10,
                mapTypeId: google.maps.MapTypeId.ROADMAP
              }
              this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
              const infowindow = new google.maps.InfoWindow();
              
              /** Start GeoLocation Marker and Info */
              let geoLatLon = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);              
              let geoAddToolTip = this.addMarker(geoLatLon,this.map); //Start Add Marker
              this.addInfoWindow(geoAddToolTip, 'Center Location'); //Start Window of Marker
              /** End GeoLocation Marker and Info */

              /** Start Filter for Multiple Marker and Info window */
              centerMaps.data.center_data.filter((centerMapData)=>{
                  let latLon = 'latLon_'+centerMapData.id; // latLon Marker variable
                  let addToolTip = 'tooltip_'+centerMapData.id; // latLon Marker Info variable
                  latLon = new google.maps.LatLng(centerMapData.center_lat, centerMapData.center_long);
                  
                  //Start Add Marker
                  addToolTip = this.addMarker(latLon,this.map);
                  let mapinfo = '<img src="'+centerMapData.center_image+'" width = "50px" height = "50px">"'+" <span style='display:inline-block; margin-left:10px;'>" + centerMapData.name + "<br/>"+ centerMapData.address1 + "<br/>" + centerMapData.phone + "</span>";
                  //Start Window of Marker
                  this.addInfoWindow(addToolTip, mapinfo); 
              });
              /** End Filter for Multiple Marker and Info window */
          }else{
              console.log("Status is not 1 ");
          }
          /**  */
      });
    }, (err) => {
      console.log(err);
    });
  }
  
  /** Start add Marker */
  addMarker(position,map){
    let marker = new google.maps.Marker({
      map,
      animation: google.maps.Animation.DROP,
      position
    });
   return marker;
  }
 /** End add Marker */

 /** Start add Marker */
  addInfoWindow(marker, content){
    let infoWindow = new google.maps.InfoWindow({
      content: content
    });
   
    google.maps.event.addListener(marker, 'click', () => {
      infoWindow.open(this.map, marker);
    });
   
  }
 /** End add Marker */
  
}
