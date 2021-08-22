import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getAll } from '../state/location.action';

@Component({
  selector: 'rs-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  
  constructor(private store: Store<{ data: {Location: {payload: Array<object>}} }>) { }

  ngOnInit(): void {
    this.store.dispatch(getAll());
  }

}
