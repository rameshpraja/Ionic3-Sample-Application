import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import {StoryListPage} from '../story-list/story-list';
/**
 * Generated class for the BlogPostPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-blog-post',
  templateUrl: 'blog-post.html',
})
export class BlogPostPage {
  storyDetailId:any;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public menuCtrl: MenuController
  ) {
    //this.menuCtrl.enable(false);
    this.storyDetailId = navParams.get('categoryId');
    console.log(this.storyDetailId);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BlogPostPage');
  }
  
}
