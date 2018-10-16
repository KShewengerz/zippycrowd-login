import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';

import { BsModalService } from 'ngx-bootstrap/modal';

import { Recommendation } from '@app/home/models/recommendation.interface';


@Component({
  selector: 'app-recommendation-form',
  templateUrl: './recommendation-form.component.html',
  styleUrls: ['./recommendation-form.component.scss']
})
export class RecommendationFormComponent implements OnInit {

  recommendation: Recommendation = {
    name: null,
    location: null
  };
  
  isAllLocations: boolean = false;
  
  constructor(private modalService: BsModalService) { }

  ngOnInit() {}
  
  save({name, location}, template: TemplateRef<any>): void {
    location = location ? location : 'Any locations';
  
    console.log(template);
    this.modalService.show(template);
  }

}
