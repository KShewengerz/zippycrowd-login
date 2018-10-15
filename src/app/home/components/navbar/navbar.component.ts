import { Component, OnInit } from '@angular/core';

import { ListItem } from '../../models/list-item.interface';

import { listItems } from './navbar-template-helpers';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  
  isCollapsed: boolean = true;
  menu: ListItem[] = listItems;
  
  constructor() { }

  ngOnInit() {}

}
