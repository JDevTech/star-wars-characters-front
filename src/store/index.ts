import * as ReactRedux from "react-redux";
import thunk, { ThunkDispatch } from "redux-thunk";
import { AnyAction, combineReducers } from "redux";
import { createStore, applyMiddleware } from "redux";

import speciesReducer from "./reducers/species";
import charactersReducer from "./reducers/characters";

const reducers = combineReducers({
  species: speciesReducer,
  characters: charactersReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

type AppDispatch = typeof store.dispatch;
type RootState = ReturnType<typeof store.getState>;
type ThunkDispatchType = ThunkDispatch<{}, {}, AnyAction>;
type UseSelectorHookType = ReactRedux.TypedUseSelectorHook<RootState>;

export const useSelector: UseSelectorHookType = ReactRedux.useSelector;
export const useDispatch = () => ReactRedux.useDispatch<AppDispatch>();
export const useAsyncDispatch = () =>
  ReactRedux.useDispatch<ThunkDispatchType>();

export default store;
