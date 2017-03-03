import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import 'rxjs/add/operator/map';
import {TranslateService} from 'ng2-translate';
import { Push, PushToken } from '@ionic/cloud-angular';
import { Toast } from 'ionic-native';

@Injectable()
export class Globals {
  notification: Boolean;
  color: string;
  textColor: string;
  headerBackground: string;
  contentBackground: string;
  sidebarBackground: string;
  buttonColor: string;
  loaderBackground: string;

  constructor(public push: Push, private http: Http, public translate: TranslateService) {
    this.http = http;
    // Definir los colores de la App.
    this.color = "#00386c";
    this.textColor = "#ffffff";
    this.headerBackground = "#333131";
    this.contentBackground = "#ad5341";
    this.sidebarBackground = "#933c2a";
    this.buttonColor = "#4cd656";
    this.loaderBackground = "#f17e3d";
  }
  // GET de Menús: Menús, Categorías y Platos.
  getMenus(): any {
    return this.http.get('http://appr.deideasmarketing.solutions/wp-json/appr/v1/menus-list/')
      .map(res => res.json());
  }
  // GET de Promociones: ID, Nombre y Descripción.
  getPromotions(): any {
    return this.http.get('http://appr.deideasmarketing.solutions/wp-json/appr/v1/promotions-list/')
      .map(res => res.json());
  }
  // POST del Token de los dispositivos que abren la App.
  postDevicetoken(deviceToken): void {
    this.http.post('', deviceToken)
      .subscribe((res: Response) => {
        console.log(deviceToken);
        deviceToken = res.json();
      });
  }
  // Función global para cambiar idioma.
  changeLanguage(lang) {
    this.translate.setDefaultLang(lang);
  }

  //Activar notificaciones.
  registerNotifications() {
    this.notification = true;
    this.push.register().then((t: PushToken) => {
      return this.push.saveToken(t);
    }).then((t: PushToken) => {
      console.log('Token saved:', t.token);
      this.postDevicetoken(t.token);
      Toast.show('Notificaciones activadas', '5000', 'center').subscribe(
        toast => {
          console.log(toast);
        }
      );
    });
  }

  //Desactivar notificaciones.
  unregisterNotifications() {
    this.notification = false;
    this.push.unregister();
    Toast.show('Notificaciones desactivadas', '5000', 'center').subscribe(
      toast => {
        console.log(toast);
      }
    );
  }
}
