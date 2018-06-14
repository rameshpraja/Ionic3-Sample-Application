import { Component, ViewChild } from '@angular/core';
import {  Nav, Platform, MenuController,LoadingController  } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Subject } from 'rxjs/Subject';

//import { LoginPage } from '../pages/login/login';
// import { DashboardPage } from '../pages/dashboard/dashboard';
import { LoginPage, MainPage } from '../pages/pages';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { Storage } from '@ionic/storage';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage:any = '';
  activePage = new Subject();

  parentPages: Array<{ title: string, component: any, active: boolean, icon: string}>;
  centerPages: Array<{ title: string, component: any, active: boolean, icon: string}>;
  rightMenuItems: Array<{ icon: string, active: boolean }>;
  placeholder = 'assets/imgs/avatar/avatar2.jpeg';
  state: any;
  userRole: string = '';
  constructor(
    platform: Platform, 
    statusBar: StatusBar, 
    splashScreen: SplashScreen,
    public menuCtrl: MenuController,
    public loadingCtrl: LoadingController,
    private auth: AuthServiceProvider,
    private storage: Storage
  ) {
    /** Start - Initialized App */
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
      //this.menuCtrl.enable(true, 'right');
    });
    /** End - Initialized App */

    /** Start : check if token exist show Main Page else Login page*/
    if(this.storage.get('centerToken')){
      this.storage.get('centerToken').then((val) => {
        if (val == '' || val == null ) {
          console.log("this key does not exists");
          this.storage.set('centerToken', '');
          this.rootPage = LoginPage;
        } else {
          this.rootPage = MainPage;
        }
      });

    }else{
      this.storage.get('parentToken').then((val) => {
        if (val == '' || val == null ) {
          console.log("this key does not exists");
          this.storage.set('parentToken', '');
          this.rootPage = LoginPage;
        } else {
          this.rootPage = MainPage;
        }
      });

    }
   /** End : check if token exist show Main Page else Login page*/

  }


  rightMenuClick(item) {
    this.rightMenuItems.map(menuItem => menuItem.active = false);
    item.active = true;
  }
  /** End - Sidebar Menu  */

}
