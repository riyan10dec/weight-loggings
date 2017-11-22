import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Weight } from '../weight';
import { Weights } from '../dummy-weights';

@Injectable()
export class WeightService {

  getWeights(): Observable<Weight[]> {
    // Todo: send the message _after_ fetching the heroes
    return of(Weights);
  }

  getWeight(id: number): Observable<Weight> {
    // Todo: send the message _after_ fetching the hero
    return of(Weights.find(w => w.id === id));
  }
  updateWeight(weight: Weight): Observable<any> {
    Weights.forEach(w=> {
      if(w.id === weight.id){
        w.max = weight.max;
        w.min = weight.min;
      }
    });
    return;
  }

  newWeight(weight: Weight): Observable<any> {
    weight.id = Weights.length + 1;
    Weights.push(weight);
    return;
  }
}


/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/