import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { obj } from '../state/data.state';

@Component({
  selector: 'rs-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories: any;

  constructor(private activatedRoute: ActivatedRoute,
    private store: Store<{data: Array<obj>}>) { }

  ngOnInit(){
    this.activatedRoute.paramMap
      .subscribe(paramMap => {
        let location = paramMap.get('location');
        let branch = paramMap.get('branch');
        
        this.store.subscribe(state => {
          let droplist = state.data;
          
          let i = droplist.findIndex((x: any) => x.name === location);
          let j = droplist[i].branches.findIndex((y:any)=> y.name === branch);
          this.categories = droplist[i].branches[j].categories;
        });
      })
  }

}
