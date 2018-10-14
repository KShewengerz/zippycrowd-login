import { ListItem } from '../../models/list-item.interface';


export const listItems: ListItem[] = [
  { type: 'span', label: 'New to ZippyCrowd?' },
  { type: 'button', label: 'GET STARTED', class: 'outline' },
  { type: 'span', label: 'or' },
  { type: 'button', label: 'LOG IN', class: 'primary' },
  { type: 'custom' }
];
