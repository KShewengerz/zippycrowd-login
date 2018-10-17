import { Component, TemplateRef } from '@angular/core';

import { BsModalService } from 'ngx-bootstrap/modal';

import { Recommendation } from '@app/home/models/recommendation.interface';


/**
 * A component that is responsible for
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
  
  constructor(private modalService: BsModalService) { }
  
  /**
   *
   * @param name        sample
   * @param location    sample
   * @param template    sample
   */
  save({name, location}, template: TemplateRef<any>): void {
    location = location ? location : 'Any locations';
  
    this.modalService.show(template);
  }

}
