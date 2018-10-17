import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

/* 3rd Party Modules */
import { UiSwitchModule } from 'ngx-ui-switch';
import { CollapseModule, ModalModule } from 'ngx-bootstrap';

/* Containers */
import { HomeComponent } from '@app/home/containers/home/home.component';

/* Components */
import { NavbarComponent } from '@app/home/components/navbar/navbar.component';
import { RecommendationFormComponent } from '@app/home/components/recommendation-form/recommendation-form.component';
import { RecommendationComponent } from './containers/recommendation/recommendation.component';


/**
 * A module that that is responsible for Home Components, Containers, Sercices and Models/Interfaces
 */
@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
    RecommendationFormComponent,
    RecommendationComponent
  ],
  imports: [
    /* Angular Modules */
    CommonModule,
    FormsModule,
    /* 3rd Party Modules */
    CollapseModule.forRoot(),
    ModalModule.forRoot(),
    UiSwitchModule.forRoot({
      size: 'small',
      switchColor: '#604c8d',
      color: '#8576aa7a'
    })
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule {}
