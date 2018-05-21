import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import * as actions from '../../store/menu.actions';
import * as fromMenu from '../../store/menu.reducer';
import { MenuItem } from '../../store/menu.reducer';

import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-menu-component',
  templateUrl: './menu-component.component.html',
  styleUrls: ['./menu-component.component.css']
})
export class MenuComponent implements OnInit {
  menuItemList$: Observable<MenuItem[]>;

  constructor(private store: Store<fromMenu.State>) {
    this.store.dispatch(new actions.Query());
  }

  ngOnInit() {
    this.menuItemList$ = this.store.select(fromMenu.selectAll);
  }

  createItem() {
    const menuItem: fromMenu.MenuItem = {
      id: new Date().getUTCMilliseconds().toString(),
      name: 'cheese pizza',
      category: 'pizza',
      description: 'amazing Italian treat',
      imgUrl: 'http://green-wife-horse.wikia.com/wiki/File:Pizza-margarita.png',
      price: 12,
      ordered: false
    };

    this.store.dispatch(new actions.Create(menuItem));
  }

  updateItem(id: string, prop: Partial<MenuItem>) {
    this.store.dispatch(new actions.Update(id, prop));
  }

  deleteItem(id: string) {
    this.store.dispatch(new actions.Delete(id));
  }
}
