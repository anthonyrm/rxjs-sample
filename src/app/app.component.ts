import { Component } from '@angular/core';
import { MyService } from './example.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'rxjs-sample';

  constructor(private myService: MyService) {
    // Ejemplos de uso de operadores de RxJS, descomentar uno por uno y abrir consola
    // this.myService.mapExample();
    // this.myService.filterExample();
    // this.myService.switchMapExample();
    // this.myService.takeExample();
    // this.myService.skipExample();
  }
}
