import { state } from "@angular/animations";
import { createReducer, on, Action } from "@ngrx/store";

import { getAll, retrieveLocation } from "./location.action";

export const initialState: object = {};

export const locationReducer = createReducer(
    initialState,
    on(retrieveLocation, (state, Location) => ({...state, Location}))
)