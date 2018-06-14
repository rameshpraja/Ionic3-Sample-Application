import { Component, ViewChild  } from '@angular/core';
import { 
  IonicPage, 
  NavController, 
  NavParams,
  AlertController, 
  LoadingController, 
  Loading, 
  MenuController,
  Slides
} from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  loading: Loading;
  public backgroundImage = 'assets/imgs/background/banner.jpg';
  loginModel = { 
    username: '', 
    password: '' ,
    role_id : ''
  };
  kidCare: any = ''; 

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private auth: AuthServiceProvider,
    private alertCtrl: AlertController, 
    private loadingCtrl: LoadingController,
    public menuCtrl: MenuController
  ) {
    this.kidCare = 'Owner';
  }

  // Slider methods
  @ViewChild('slider') slider: Slides;
  @ViewChild('innerSlider') innerSlider: Slides;

  goToLogin() {
    this.slider.slideTo(1);
  }

  goToSignup() {
    this.slider.slideTo(2);
  }

  slideNext() {
    this.innerSlider.slideNext();
  }

  slidePrevious() {
    this.innerSlider.slidePrev();
  }

  /** Start User Login Function */
  public login() {
    this.loginModel.role_id = '2';
    this.showLoading()
    this.navCtrl.setRoot('StarterPage');
    // this.auth.login(this.loginModel).subscribe((userStatus:any) => {
    //   if (userStatus) {        
    //     console.log(this.loginModel.role_id);
    //     this.navCtrl.setRoot('DashboardPage');
    //   } else {
    //     this.showError("Access Denied");
    //   }
    // },
    //   error => {
    //     this.showError(error);
    //     console.log("Error pleas check !! => " + error.status); 
    //   });
  }
 /** End User Login Function */

 

  /** Start - Loading page function */
  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'loading...',
      dismissOnPageChange: true
    });
    this.loading.present();
  }
 /** End - Loading page function */

 /** Start Show Error Alert function */
  showError(message) {
    this.loading.dismiss();
    let alert = this.alertCtrl.create({
      title: 'Fail',
      subTitle: message,
      buttons: ['OK']
    });
    alert.present();
  }
/** End Show Error Alert function */

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
}
