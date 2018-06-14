import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {DashboardPage} from '../dashboard/dashboard';

@IonicPage()
@Component({
  selector: 'page-story-list',
  templateUrl: 'story-list.html',
})
export class StoryListPage {
  activeMenu: string;
  categoryId:any;
  storyLists:any = [
    {
      storyListId: 1,
      imageUrl: 'assets/imgs/lists/stadium.jpg',
      title: 'First Cup',
      place: 'Madison Square',
      date: '05/06/2016'
    },
    {
      storyListId: 2,
      imageUrl: 'assets/imgs/lists/stadium-3.png',
      title: 'Season',
      place: 'Hooli',
      date: '15/03/2016'
    },
    {
      storyListId: 3,
      imageUrl: 'assets/imgs/lists/stadium-2.jpg',
      title: '2nd Season',
      place: 'Castelão',
      date: '05/12/2015'
    },
  ];
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams
  ) {
    /** Start Menu Toggle Authentication */
      //this.activeMenu = this.auth.menuAuthentication(); 
      this.activeMenu = 'centerAuthenticated'; 
      /** End Menu Toggle Authentication */

    this.categoryId = navParams.get('categoryId');
    console.log('this.list');
    console.log(this.categoryId);
   }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StoryListPage');
  }
  delete(item) {
    alert('Deleted ' + item.title);
  }

  viewComments(item) {
    alert('Viewing comments of ' + item.title);
  }

  viewPlayers(item) {
    alert('Viewing players of ' + item.title);
  }

  gotoStoryDetails(details){
    //this.navCtrl.setRoot('BlogPostPage');
    this.navCtrl.push('BlogPostPage',{
      storyDetailsObj:details.storyListId
    });
  }
}
