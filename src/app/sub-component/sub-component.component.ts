import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { obj } from '../state/data.state';

@Component({
  selector: 'rs-sub-component',
  templateUrl: './sub-component.component.html',
  styleUrls: ['./sub-component.component.css']
})
export class SubComponentComponent implements OnInit {
  subcategories = new Array();
  
  constructor(private activatedRoute: ActivatedRoute,
    private store: Store<{data: Array<obj>}>) { }

  ngOnInit(){
    this.activatedRoute.paramMap
      .subscribe(paramMap => {
        let location = paramMap.get('location');
        let branch = paramMap.get('branch');
        let category = paramMap.get('category');
        
        
        this.store.subscribe(state => {
          let droplist = state.data;
          let i = droplist.findIndex((x: any) => x.name === location);
          let j = droplist[i].branches.findIndex((y: any) => y.name === branch);
          let k = droplist[i].branches[j].categories.findIndex((z: any) => z.name === category);

          droplist[i].branches[j].categories[k].subcategories.forEach((x:any) => this.subcategories.push(x));
        });


        
      })
  }

}
