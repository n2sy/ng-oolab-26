import { Component } from '@angular/core';
import { Observable, Observer, Subscription } from 'rxjs';

@Component({
  selector: 'app-exp-observable',
  imports: [],
  templateUrl: './exp-observable.html',
  styleUrl: './exp-observable.css',
})
export class ExpObservable {
  inscription: Subscription;
  myObs$: Observable<number> = new Observable((observer: Observer<number>) => {
    let count = 0;
    setInterval(() => {
      count++;
      observer.next(count);
    }, 1000);
  });
  // myObs$: Observable<string> = new Observable((observer: Observer<string>) => {
  //   setTimeout(() => {
  //     observer.next('Value 1');
  //   }, 2000);
  //   setTimeout(() => {
  //     observer.next('Value 2');
  //   }, 4000);
  //   // setTimeout(() => {
  //   //   observer.error(new Error('Unknwon Error'));
  //   // }, 6000);
  //   setTimeout(() => {
  //     observer.complete();
  //   }, 6000);
  //   setTimeout(() => {
  //     observer.next('Value 3');
  //   }, 8000);
  // });

  ngOnInit() {
    this.inscription = this.myObs$.subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (err) => {
        console.log('Erreur capturée', err);
      },
      complete: () => {
        console.log('Flux fermée');
      },
    });
  }

  ngOnDestroy() {
    this.inscription.unsubscribe();
  }
}
