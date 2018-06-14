import { Component, ViewChild } from '@angular/core';
import { 
  IonicPage, 
  NavController,
  Platform, NavParams, 
  ActionSheetController, 
  LoadingController,
  MenuController } from 'ionic-angular';
import { Chart } from 'chart.js';
import { CameraProvider } from '../../providers/util/camera.provider';
import { Storage } from '@ionic/storage';
/** Start Provider */
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { DashboardProvider } from '../../providers/dashboard';
/** End Provider */
//import {StoryListPage} from '../story-list/story-list';
@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html'
})
export class DashboardPage {
  
  @ViewChild('barCanvas') barCanvas;  

  placeholder = 'assets/imgs/imgs/mario.jpg';
  chosenPicture: any;
  activeMenu: string;
  barChart: any;

  centerId : string = '';
  chartMonths : any = [];
  chartLeadsCount : any = [];
  categories: any = [
    {
      id: 1,
      imageUrl: 'assets/imgs/card/baby-health-care.jpg',
      title: 'Baby health',
      subtitle: '41 Listings'
    },
    {
      id: 2,
      imageUrl: 'assets/imgs/card/newborn-baby-care.jpg',
      title: 'New Born Care',
      subtitle: '64 Listings'
    },
    {
      id: 3,
      imageUrl: 'assets/imgs/card/pregpic.jpg',
      title: 'Pregnancy Guide',
      subtitle: '72 Listings'
    },
    {
      id: 4,
      imageUrl: 'assets/imgs/card/hints-and-tips.jpg',
      title: 'Hints & Tips',
      subtitle: '28 Listings'
    }];

  constructor(
      public navCtrl: NavController,
      public actionsheetCtrl: ActionSheetController,
      public cameraProvider: CameraProvider,
      public platform: Platform,
      public loadingCtrl: LoadingController,
      public menu: MenuController,
      private storage: Storage,
      private auth: AuthServiceProvider,
      private _dashboardProvider: DashboardProvider,

    ) {
      /** Start Menu Toggle Authentication */
      //this.activeMenu = this.auth.menuAuthentication(); 
      this.activeMenu = 'centerAuthenticated'; 
      /** End Menu Toggle Authentication */

     
    }

  

  ionViewDidLoad() {}
  
  openCatList(cateObj) {
    alert(cateObj.title + ' was tapped.');
    this.navCtrl.setRoot('StoryListPage',{categoryId: cateObj.id});
    // this.navCtrl.push('StoryListPage', {
    //   categoryObject: cateObj
    // });
  }
  
}
