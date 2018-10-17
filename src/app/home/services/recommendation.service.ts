import { Injectable } from '@angular/core';

import { HomeModule } from '@app/home/home.module';

import { Observable, of } from 'rxjs';

import { Recommendation } from '@app/home/models/recommendation.interface';


/**
 * A service that is responsible for fetching recommendation suggestions and submitting a recommendation.
 */
@Injectable({
  providedIn: 'root'
})
export class RecommendationService {

  constructor() { }
  
  
  /**
   * Fetches random suggestions for recommendation field
   * @returns an array of strings
   */
  fetchSuggestions(): Observable<string[]> {
    const list = ['Hairdresser', 'Plumber', 'UX Designer', 'Frontend Developer', 'Digital Marketer', 'Babysitter'];
    
    return of(list);
  }
  
  /**
   * Handles the submit functionality of recommendation form
   * @param recommendation sample
   * @returns  a recommendation and status object
   */
  submitRecommendation(recommendation: Recommendation): Observable<any> {
    return of({ recommendation, status: 200 });
  }
  
}
