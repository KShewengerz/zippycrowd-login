import { Injectable } from '@angular/core';

import { HomeModule } from '@app/home/home.module';

import { Observable, of } from 'rxjs';

import { Recommendation } from '@app/home/containers/recommendation/recommendation.interface';


@Injectable({
  providedIn: HomeModule
})
export class RecommendationService {

  constructor() { }
  
  fetchSuggestions(): Observable<string[]> {
    const list = ['Hairdresser', 'Plumber', 'UX Designer', 'Frontend Developer', 'Digital Marketer', 'Babysitter'];
    
    return of(list);
  }
  
  submitRecommendation(recommendation: Recommendation): Observable<any> {
    return of({ recommendation, status: 200 });
  }
  
}
