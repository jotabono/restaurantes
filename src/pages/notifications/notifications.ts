import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Globals } from '../../providers/globals';

@Component({
  selector: 'page-notifications',
  providers: [Globals],
  templateUrl: 'notifications.html'
})
export class NotificationsPage {
  status: string;
    description : string;
    constructor(public globals: Globals, public navCtrl: NavController, public navParams: NavParams) {
      this.status = "DESACTIVADAS";
      this.description = "No recibirá ninguna notificación de las promociones.";
    }
    ionViewDidLoad() {
      console.log('ionViewDidLoad AdminNotificationsPage');
    }
    toggleNotification(e){
       if(e.checked)
       {
         this.status = "ACTIVADO";
         this.description = "Recibirá todas las notificaciones de las promociones.";
       }
       else{
         this.status = "DESACTIVADAS";
         this.description = "No recibirá ninguna notificación de las promociones.";
       }
    }
}
