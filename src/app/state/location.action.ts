import { createAction, props } from "@ngrx/store";

export const getAll = createAction(
    '[Location API] Retrieve All Locations'
);

export const retrieveLocation = createAction(
    '[Location Load] Location Load Success',
    props<{ Location: object }>()
);