import { Component } from '@angular/core';
import { CounterService } from 'src/app/services/counter.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
})
export class NotificationComponent {
  type = '';
  constructor(private counterService: CounterService) {
    this.counterService.count$.subscribe((value) => {
      if (value % 2 === 0) {
        this.type = 'Par';
      } else {
        this.type = 'Impar';
      }
    });
  }
}
