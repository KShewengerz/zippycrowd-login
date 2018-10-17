import { Component } from '@angular/core';

import { ListItem } from '../../models/list-item.interface';

import { listItems } from './navbar-template-helpers';


/**
 * A component that is responsible for showing Navbar with its corresponding buttons (Get Started and Login)
 */
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  
  isCollapsed: boolean = true;
  menu: ListItem[] = listItems;
  
  constructor() { }

}
