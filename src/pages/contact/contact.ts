import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';


@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage implements OnInit {

  imagem: any = null;

  private options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.FILE_URI,
    encodingType: this.camera.EncodingType.JPEG, 
    mediaType: this.camera.MediaType.PICTURE
  }

  constructor(private camera: Camera) { }

  ngOnInit() { }

  tirarFoto() {
    this.camera.getPicture(this.options).then((imageData) => {
      let base64Image = 'data:image/jpeg;base64,' + imageData;

    }, (err) => {
      alert("Ops!\nHouve algum erro!");
      console.log(err)
    });
  }

}