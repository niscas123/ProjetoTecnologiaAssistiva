import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {

  public nomeUsuario:string = "Nícollas Ivanno Ramos Silva";

  constructor(public navCtrl: NavController) {
  }

  public somaDoisNumeros(num1:number, num2:number): void{
    //alert("A soma de 5 + 10 é: "+ (num1 + num2));
  }

  ionViewDidLoad() {
    //this.somaDoisNumeros(10, 99);
  }

}
