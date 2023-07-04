import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  constructor(private alertController: AlertController) { }

  ngOnInit() {
  }

  onClick() {
    this.presentAlert();
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      backdropDismiss: false,
      header: 'Alert',
      subHeader: 'Important message',
      message: 'This is an alert!',
      buttons: ['OK'],
    });

    await alert.present();
  }


  async presentMultipleAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Sub Title',
      message: 'This is an alert!',
      buttons: [
        {
          text: 'OK',
          handler: () => {
            console.log('me diste clik');
          }
        },
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'custom_class'
        }
      ],
    });

    await alert.present();
  }

  async alertPrompt() {
    const alert = await this.alertController.create({
      header: 'Prompt',
      subHeader: 'Sub Title',
      inputs: [
        {
          name: 'name1',
          type: 'text',
          placeholder: 'Place Holger'
        },
        {
          name: 'name2',
          type: 'text',
          value: 'hola',
          placeholder: 'Place Holger'
        },
        {
          name: 'name3',
          type: 'date',
          min: '2015-03-01',
          max: '2025-03-01'
        }
      ],
      buttons: [
        {
          text: 'OK',
          handler: ( data: any ) => {
            console.log(data);
          }
        }
      ]
    });

    await alert.present();
  }

  
}
