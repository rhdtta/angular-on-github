import { createAction, props } from "@ngrx/store";
import { obj } from "./data.state";

export interface array {
    payload: obj[]
}

export const getAll = createAction(
    '[Location API] Retrieve All Locations'
);

export const retrieveLocation = createAction(
    '[Location Load] Location Load Success',
    props<array>()
);