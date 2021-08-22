import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dropListService } from '../drop-list.service';

@Component({
  selector: 'rs-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories: any;

  constructor(private activatedRoute: ActivatedRoute,
    private dropListService: dropListService) { }

  ngOnInit(){
    this.activatedRoute.paramMap
      .subscribe(paramMap => {
        let location = paramMap.get('location');
        let branch = paramMap.get('branch');
        
        let droplist = this.dropListService.get();
        
        let i = droplist.findIndex((x: any) => x.name === location);
        let j = droplist[i].branches.findIndex((y:any)=> y.name === branch);
        this.categories = droplist[i].branches[j].categories;

        
      })
  }

}
