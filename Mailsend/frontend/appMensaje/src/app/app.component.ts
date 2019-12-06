import { Component } from '@angular/core';
import { MessageService } from './services/message.service';
//import * as swal from 'sweetalert';
import swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public _MessageService: MessageService) {

  }

  contactForm(form) {
    this._MessageService.sendMessage(form).subscribe(() => {
      swal.fire("Envio de datos", "Los datos se han enviado correctamente", 'success');
    });
    console.log("realizado")
  }
}
