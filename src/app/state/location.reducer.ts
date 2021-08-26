
import { createReducer, on, Action } from "@ngrx/store";
import { obj } from "./data.state";

import { getAll, retrieveLocation } from "./location.action";

export const initialState: Array<obj> = [];

export const locationReducer = createReducer(
    initialState,
    on(retrieveLocation, (state, Location) => {
        state = Location.payload;
        return state;
    })
)