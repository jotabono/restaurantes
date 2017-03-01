import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SocialSharing } from 'ionic-native';

@Component({
  selector: 'page-socialnetworks',
  templateUrl: 'socialnetworks.html'
})
export class SocialNetworksPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) { }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SocialnetworksPage');
  }
  /**
   * Opens up the share sheet so you can share using the app you like the most.
   */
  regularShare() {
    // share(message, subject, file, url)
    SocialSharing.share("Testing, sharing this from inside an app I'm building right now", null, "www/assets/img/hulk.png", null);
  }
  /**
     * This share's directly via twitter using the:
     * shareViaTwitter(message, image, url)
     */
  twitterShare() {
    SocialSharing.shareViaTwitter("Testing, sharing this from inside an app I'm building right now", "www/assets/img/hulk.png", null);
  }
  /**
 * This share's directly via Instagram using:
 * shareViaInstagram(message, image)
 */
  instagramShare() {
    SocialSharing.shareViaInstagram(`Testing, sharing this from inside an app I'm building right now`, "www/assets/img/hulk.png");
  }
  /**
   * This share's directly via whatsapp using the:
   * shareViaWhatsapp(message, image, url)
   */
  whatsappShare() {
    SocialSharing.shareViaWhatsApp("Testing, sharing this from inside an app I'm building right now", "www/assets/img/hulk.png", null);
  }
  // /**
  //  * This share's directly via whatsapp using the:
  //  * shareViaWhatsapp(message, image, url)
  //  */
  // facebookShare(){
  //   SocialSharing.shareViaFacebook("Testing, sharing this from inside an app I'm building right now", "www/assets/img/hulk.png", null);
  // }
}
