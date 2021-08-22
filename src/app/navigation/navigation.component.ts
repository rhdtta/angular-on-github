import { Component, OnInit } from '@angular/core';
import { dropListService } from '../drop-list.service';

@Component({
  selector: 'rs-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  droplist: any;
  constructor(private dropListService: dropListService) { }

  ngOnInit(){
    this.droplist = this.dropListService.get();
    
  }
}



// import { Component, OnInit } from '@angular/core';
// import { Store } from '@ngrx/store';
// import { obj } from '../state/data.state';

// @Component({
//   selector: 'rs-navigation',
//   templateUrl: './navigation.component.html',
//   styleUrls: ['./navigation.component.css']
// })
// export class NavigationComponent implements OnInit {

//   droplist: Array<obj> = [];
//   constructor(
//     private store: Store<{ data: {Location: {payload: Array<obj>}} }>) { }

//   ngOnInit(){
//     this.store.subscribe(x => {
//       this.droplist = x.data.Location.payload;
//       console.log('lets see', this.droplist);
      
//     });
//   }
// }
