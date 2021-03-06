import React from "react";
import { IEpisode, IState } from "./interfaces";

export interface IAction {
  type: string,
  payload: any
}

const initialState: IState = {
  episodes: [],
  favorites: [],
}

export const Store = React.createContext<IState | any>(initialState);

function reducer(state: IState, action: IAction): IState {
  switch (action.type) {
    case "FETCH_DATA":
      return { ...state, episodes: action.payload };
    case "ADD_FAV":
        return {...state, favorites: [...state.favorites, action.payload]}
    case "REMOVE_FAV":
      return {...state, favorites: action.payload}
    default:
      return state
  }
}

export function StoreProvider({ children }: JSX.ElementChildrenAttribute): JSX.Element {
  const [state, dispatch] = React.useReducer(reducer, initialState)
  return <Store.Provider value={{ state, dispatch }}> { children } </Store.Provider>
}
