import { Component, TemplateRef } from '@angular/core';

import { BsModalService } from 'ngx-bootstrap/modal';

import { Recommendation } from '@app/home/models/recommendation.interface';

import { RecommendationService } from '../../services/recommendation.service';


/**
 * A component that is responsible for Recommendation Form Activities
 */
@Component({
  selector: 'app-recommendation-form',
  templateUrl: './recommendation-form.component.html',
  styleUrls: ['./recommendation-form.component.scss']
})
export class RecommendationFormComponent {
  
  recommendation: Recommendation = {
    name: null,
    location: null
  };
  
  isAllLocations: boolean = false;
  
  constructor(private modalService: BsModalService,
              private recommendationService: RecommendationService) { }
  
  /**
   * Mockup Save Functionality. Shows the Modal with Success message fetched from ng-template
   *
   * @param name        recommendation name suggested
   * @param location    location; can be null or with value. Tells if whether the suggestion is applicable on a specific location.
   * @param template    ng-template ref instance.
   */
  save({name, location}, template: TemplateRef<any>): void {
    location = location ? location : 'Any locations';
    
    this.recommendationService
      .submitRecommendation({ name, location })
      .subscribe(data => this.modalService.show(template));
  }

}
