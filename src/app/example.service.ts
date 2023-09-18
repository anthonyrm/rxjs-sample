import { Injectable } from '@angular/core';
import { from, fromEvent, interval, of } from 'rxjs';
import { map, filter, switchMap, take, skip } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class MyService {
  mapExample() {
    // Operador map
    const numbers = from([1, 2, 3, 4]);

    numbers
      .pipe(map((num) => num * 2))
      .subscribe((result) => console.log(result)); // Emite: 2, 4, 6, 8
  }

  filterExample() {
    // Operador filter
    const numbersToFilter = from([1, 2, 3, 4]);

    numbersToFilter
      .pipe(filter((num) => num % 2 === 0))
      .subscribe((result) => console.log(result)); // Emite: 2, 4
  }

  switchMapExample() {
    // Operador switchMap
    const clickObservable = fromEvent(document, 'click');

    clickObservable
      .pipe(
        switchMap(() => interval(1000)) // Cambia a un nuevo contador cada vez que se hace clic
      )
      .subscribe((result) => console.log(result));
  }

  takeExample() {
    // Operador take
    const numbersToTake = interval(1000);

    numbersToTake
      .pipe(
        take(5) // Emite solo los primeros 5 números
      )
      .subscribe((result) => console.log(result)); // Emite: 0, 1, 2, 3, 4
  }
  skipExample() {
    // Operador skip
    const numbersToSkip = interval(1000);

    numbersToSkip
      .pipe(
        skip(3) // Omite los primeros 3 números
      )
      .subscribe((result) => console.log(result)); // Emite: 3, 4, 5, 6, ...
  }
}
