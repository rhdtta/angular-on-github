// import { Component, OnInit } from '@angular/core';
// import { dropListService } from '../drop-list.service';

// @Component({
//   selector: 'rs-navigation',
//   templateUrl: './navigation.component.html',
//   styleUrls: ['./navigation.component.css']
// })
// export class NavigationComponent implements OnInit {

//   droplist: any;
//   constructor(private dropListService: dropListService) { }

//   ngOnInit(){
//     this.droplist = this.dropListService.get();
    
//   }
// }



import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { obj } from '../state/data.state';

@Component({
  selector: 'rs-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  droplist: Array<obj> = [];
  constructor(
    private store: Store<{data: Array<obj>}>) { }

  ngOnInit(){
    this.store.subscribe(state => {
      this.droplist = state.data;
    });
  }
}
