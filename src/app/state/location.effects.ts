import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, tap, mergeMap, catchError } from "rxjs/operators";
import { dropListService } from "../drop-list.service"; 
import { EMPTY } from "rxjs";

@Injectable()
export class locationEffects {
    loadLocation$ = createEffect(() => this.actions$
        .pipe(
            ofType('[Location API] Retrieve All Locations'),
            mergeMap(() => this.dropListService.gett()
                .pipe(
                    map(location => ({ type: '[Location Load] Location Load Success', payload: location})),
                    catchError(() => EMPTY)
                )
            )
        )
    );

    constructor(private actions$: Actions, private dropListService: dropListService) {}
}