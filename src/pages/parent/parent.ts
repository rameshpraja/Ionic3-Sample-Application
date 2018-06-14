import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { DashboardProvider } from '../../providers/dashboard';
import { parentprovider } from '../../providers/parentprovider';

/**
 * Generated class for the ParentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// export class ParentList {
//     id: string;
//     name: string;
//     balance: string;
//     reference: string;
//     center_id: string;
//     status_id: string;
//     group_id: string;
//     custkey: string;
//     sponsors: [
//         {
//             id: string;
//             salutation: string;
//             first_name: string;
//             middle_name: string;
//             last_name: string;
//             display_name: string;
//             address1: string;
//             address2: string;
//             city: string;
//             zip: string;
//             home_phone: string;
//             work_phone: string;
//             work_phone_extension: string;
//             cell_phone: string;
//             email: string;
//             image: string;
//             parent_sign: string;
//             pin: string;
//             created_at: string;
//             updated_at: string;
//             deleted_at: string;
//             customer_id: string;
//             center_id: string;
//             sponsor_type_id: string;
//             relation_id: string;
//             state_id: string;
//             company_id: string;
//             coupon_id: string;
//             created_by: string;
//             modified_by: string;
//             deleted_by: string;
//             relation: {
//                 name: string;
//             }
//         }
//     ];
//     childrens: [
//         {
//             id: string;
//             first_name: string;
//             middle_name: string;
//             last_name: string;
//             dob: string;
//             is_expected: string;
//             gender_id: string;
//             is_active: string;
//             gender: string;
//             childrenRateMappings: [{}];
//         }
//     ];
//     coupons: [{}];
//     payments: [
//         {
//             id: string;
//             nick_name: string;
//             first_name: string;
//             last_name: string;
//             pgi_token: string;
//             ach_account_number: string;
//             ach_account_type: string;
//             creditcard_number: string;
//             creditcard_type: string;
//             zipcode: string;
//             is_primary: string;
//             is_active: string;
//             customer_id: string;
//             payment_method_type_id: string;
//             payment_method_type: {
//                 type: string;
//             }
//         }
//     ];
//     status: {
//         name: string;
//     };
//     center: {
//         name: string;
//         using_sns: string;
//     };
//     group: string;
// }
@IonicPage()
@Component({
  selector: 'page-parent',
  templateUrl: 'parent.html',
})
export class ParentPage {
  parentLists : any = [];
  
  parentData: any = {
    pageTitle: "Families",
    page:"1",
    pagesize:"10",
    total:"0",
    order:"-id",
    center_id:"62"
  };
  
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private auth: AuthServiceProvider,
    private _parentlistprovider: parentprovider,) {
          /** Start Menu Toggle Authentication */
      //  this.activeMenu = this.auth.menuAuthentication();
        /** End Menu Toggle Authentication */
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ParentPage');
    // {"pageTitle":"Families","page":1,"pagesize":10,"total":0,"order":"-id","where":{"center_id":"62"}}
    

    this._parentlistprovider.centerParentlist(this.parentData).subscribe((ParentListData: any)=>{
      console.log('ParentListData3');
      
      ParentListData.data.data.filter((parentListData)=>{
        this.parentLists.push(parentListData);
      });
      console.log(this.parentLists);
    }, error=>{
        console.log('error');
        console.log(error);
    });
  }

  OpenParentDetailPage() {
    this.navCtrl.setRoot('ParentdetailPage');
  }

  navigateToParentDetail(list){
    console.log(list);
    this.navCtrl.push('ParentdetailPage', {
      'childrenData':  list.childrens
    });
  }

}
