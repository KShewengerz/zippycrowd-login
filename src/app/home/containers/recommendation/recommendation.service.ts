import { Injectable } from '@angular/core';

import { HomeModule } from '@app/home/home.module';

import { Observable, of } from 'rxjs';

import { Recommendation } from '@app/home/models/recommendation.interface';


/**
 * A service that is responsible for
 */
@Injectable({
  providedIn: HomeModule
})
export class RecommendationService {

  constructor() { }
  
  
  /**
   * An
   * @returns an
   */
  fetchSuggestions(): Observable<string[]> {
    const list = ['Hairdresser', 'Plumber', 'UX Designer', 'Frontend Developer', 'Digital Marketer', 'Babysitter'];
    
    return of(list);
  }
  
  /**
   * An
   * @param recommendation sample
   * @returns  a recommendation and status object
   */
  submitRecommendation(recommendation: Recommendation): Observable<any> {
    return of({ recommendation, status: 200 });
  }
  
}
