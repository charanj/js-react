import { createStore } from "redux";

import { RECEIVED_COLLECTIONS, ADD_COLLECTION } from './constants'

const initialStates = {
  Materials:[],
  Elements:[],
  Projects:[],
  Manufactures:[],
  collections: []
}

const reducers = (state = initialStates, action) => {
  switch (action.type) {
    case RECEIVED_COLLECTIONS:
      return state
    case ADD_COLLECTION:

      return {
        ...state,
        collections: [...state.collections, action.data]
      };

    default:
      return state
  }
}

export const store = createStore(reducers)

