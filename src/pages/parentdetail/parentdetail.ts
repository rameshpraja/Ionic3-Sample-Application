import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {ParentPage} from '../parent/parent';

/**
 * Generated class for the ParentdetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-parentdetail',
  templateUrl: 'parentdetail.html',
})
export class ParentdetailPage {
  parentData : any;
  parentDetailsLists: any[] = [
    {
      childimage : 'baby.jpg',
      name: 'Hudson',
      datetime : '1/11/2017 5:30 AM',
      childdetails : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      childimage : 'babycut.jpg',
      name: 'Angara',
      datetime : '1/11/2017 5:30 AM',
      childdetails : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }
  ];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams
  ) {
    this.parentData = navParams.get("childrenData");
    console.log('this.parentData');
    console.log(this.parentData);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ParentdetailPage');
  }

//  For Send Notification
  notifications(event: Event) {
    event.stopPropagation();
//    alert('notifications');
  }

//  For Share Whatsapp messanger
  whatsapp(event: Event) {
    event.stopPropagation();
//    alert('whatsapp');
  }

// For Mail
  mail(event: Event) {
    event.stopPropagation();
//    alert('mail');
  }

}
