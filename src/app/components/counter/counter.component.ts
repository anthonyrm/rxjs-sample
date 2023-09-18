import { Component } from '@angular/core';
import { CounterService } from '../../services/counter.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
})
export class CounterComponent {
  // count = 0;
  constructor(public counterService: CounterService) {
    // this.counterService.count$.subscribe((value) => {
    //   this.count = value;
    // });
  }

  increment() {
    this.counterService.increment();
  }

  decrement() {
    this.counterService.decrement();
  }
}
