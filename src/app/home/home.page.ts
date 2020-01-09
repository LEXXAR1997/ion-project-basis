import { Component } from '@angular/core';
import { AlertController, } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private alertController: AlertController) {}


  onBeerClicked(){
    console.log("hola")
  }

  openAlert() {
    this.alertController.create({
        header: 'Hello world!',
        subHeader: '¡Los baños estan mas limpios ahora!',
        buttons: [
            {
                text: 'Cerrar',
                handler: () => {
                    console.log('bye bye!');
                }
            }
        ]
    }).then(alert => {
        return alert.present();
    }).then(() => {
        console.log('ya se terminó de abrir 100% seguro');
    });

}
  


  cardsData = [{
    title: 'Hola a todos',
    subtitle: 'El agua esta bien',
    contentText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis libero in, iure nam culpa unde cupiditate asperiores doloremque! Error, quis. Culpa, dolorem nam. Ratione ea esse dolores, non saepe iure?'
  },
  {
    title: 'Hola a todos 2',
    subtitle: 'El agua esta bien',
    contentText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis libero in, iure nam culpa unde cupiditate asperiores doloremque! Error, quis. Culpa, dolorem nam. Ratione ea esse dolores, non saepe iure?'
  },
  {
    title: 'Hola a todos 3',
    subtitle: 'El agua esta bien',
    contentText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis libero in, iure nam culpa unde cupiditate asperiores doloremque! Error, quis. Culpa, dolorem nam. Ratione ea esse dolores, non saepe iure?'
  }

];

}
