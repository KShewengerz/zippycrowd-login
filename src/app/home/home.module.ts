import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Containers
import { HomeComponent } from '@app/home/containers/home/home.component';

// Components
import { NavbarComponent } from '@app/home/components/navbar/navbar.component';
import { RecommendationFormComponent } from '@app/home/components/recommendation-form/recommendation-form.component';
import { RecommendationComponent } from './containers/recommendation/recommendation.component';


@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
    RecommendationFormComponent,
    RecommendationComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule {}
