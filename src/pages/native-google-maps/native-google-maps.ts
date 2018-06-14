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
// import { NearbylistPage } from '../near-by-list/near-by-list';
// import { NearbymapPage } from '../near-by-map/near-by-map';

import { nearByListPage, nearByMapPage } from '../../pages/pages';
declare var google;

@IonicPage()
@Component({
  selector: 'page-native-google-maps',
  templateUrl: 'native-google-maps.html',
})
export class NativeGoogleMapsPage {
  nearByListPage = nearByListPage;
  nearByMapPage = nearByMapPage;
//   @ViewChild('map') mapElement: ElementRef;
//   map:GoogleMap;
//   mapLists : any = '';
//   constructor(
//     public navCtrl: NavController, 
//     public navParams: NavParams,
//     public platform: Platform,
//     private _googleMaps : GoogleMaps,
//     public geolocation: Geolocation
//   ) {
//     this.mapLists = 'nearByMap';
    
    
//   }

//    // Load map only after view is initialized
//    ngAfterViewInit() {}

//   ionViewDidLoad() {
//     this.initMap();
//   }
//   initMap(){
//     this.geolocation.getCurrentPosition().then((position) => {
//       let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
//       let mapOptions = {
//         'controls': {
//           'compass': true,
//           'myLocationButton': true,
//           'indoorPicker': true,
//           'zoom': true,
//         },
//         'gestures': {
//           'scroll': true,
//           'tilt': true,
//           'rotate': true,
//           'zoom': true
//         },
//         'camera': {
//           'target': {
//             'lat': position.coords.latitude,
//             'lng': position.coords.longitude
//           },
//           'tilt': 30,
//           'zoom': 10,
//           'bearing': 50
//         },
//         center: latLng,
//         zoom: 10,
//         mapTypeId: google.maps.MapTypeId.ROADMAP
//       }
//       this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
//       const infowindow = new google.maps.InfoWindow();

//       //Start Array of Multiple Location
//       var locations = [
//           {
//             lat : position.coords.latitude,
//             lon : position.coords.longitude,
//             title : 'Ahmedabad'
//           },
//           {
//             lat : '21.170240',
//             lon : '72.831062',
//             title : 'Surat'
//           },
//           {
//             lat : '22.308155',
//             lon : '70.800705',
//             title : 'Rajkot'
//           }
//       ];
//       //End Array of Multiple Location

//       //Start Loop for Multiple Marker and Info window
//       for(let i = 0; i<locations.length; i++){
//         let latLon = 'latLon_'+i; //
//         let addToolTip = 'tooltip_'+i;
//         latLon = new google.maps.LatLng(locations[i].lat, locations[i].lon);
        
//         //Start Add Marker
//         addToolTip = this.addMarker(latLon,this.map);

//         //Start Window of Marker
//         this.addInfoWindow(addToolTip, locations[i].title); 
//       }
//       //End Loop for Multiple Location
//     }, (err) => {
//       console.log(err);
//     });
    
//   }
  
//   /** Start add Marker */
//   addMarker(position,map){
//     let marker = new google.maps.Marker({
//       map,
//       animation: google.maps.Animation.DROP,
//       position
//     });
//    return marker;
//   }
//  /** End add Marker */

//  /** Start add Marker */
//   addInfoWindow(marker, content){
//     let infoWindow = new google.maps.InfoWindow({
//       content: content
//     });
   
//     google.maps.event.addListener(marker, 'click', () => {
//       infoWindow.open(this.map, marker);
//     });
   
//   }
 /** End add Marker */
  
}
