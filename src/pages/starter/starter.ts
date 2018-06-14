import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { Subject } from 'rxjs/Subject';
import { Storage } from '@ionic/storage';

import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { DashboardPage } from '../../pages/pages';
/**
 * Generated class for the StarterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-starter',
  templateUrl: 'starter.html',
})
export class StarterPage {
  @ViewChild(Nav) nav: Nav;
  rootPage:any = DashboardPage;
  placeholder = 'assets/imgs/avatar/avatar2.jpeg';
  myActivePage = new Subject();
  
  //centerPages: Array<{ title: string, component: any, active: boolean, icon: string}>;
  //centerPages: Array<{ title: string, active: boolean, icon: string}>;
  centerPages:any= [];
  rightMenuItems: Array<{ icon: string, active: boolean }>;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private storage: Storage,
    public loadingCtrl: LoadingController,
    private auth: AuthServiceProvider
  ) {

   
    /** Start - Center Page Menu  */
    // this.centerPages = [
    //   { title: 'Dashboard', component: DashboardPage, active: true, icon: 'Dashboard'},
    //   // { title: 'Baby health',  active: false, icon: 'Baby health'},
    //   // { title: 'New Born Care', active: false, icon: 'Baby Born Care'},
    //   // { title: 'Pregnancy Guide', active: false, icon: 'Pregnancy Guide'},
    //   // { title: 'Hints & Tips',  active: false, icon: 'Hints & Tips'}
    // ];

    this.centerPages = [
      { title: 'Dashboard', active: true, icon: 'home'},
      { title: 'Babyhealth',  active: false, icon: 'home'},
      { title: 'NewBornCare', active: false, icon: 'home'},
      { title: 'PregnancyGuide', active: false, icon: 'home'},
      { title: 'Hints&Tips',  active: false, icon: 'home'}
    ];

    this.myActivePage.subscribe((selectedPage: any) => {
      this.centerPages.map(page => {
        page.active = page.title === selectedPage.title;
      });
    });
    /** End - Center Page Menu  */

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StarterPage');
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    const loading = this.loadingCtrl.create();
    loading.present();
    if(page == 'logout'){
      loading.dismiss();
      
      if(this.storage.get('centerToken')){
        this.auth.logout('centerToken');
      }else{
        this.auth.logout('parentToken');
      }
      this.nav.setRoot('LoginPage');  

    }else{
      this.nav.setRoot('StoryListPage',{categoryId: 1});
      loading.dismiss();
      this.myActivePage.next(page);
    }

    
    
  }

}
