import * as types from "./actionType";

const initialState = {
  payers: [],
  payer: {},
  loading: true,
};

const payersReducers = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_PAYERS:
      return {
        ...state,
        payers: action.payload,
        loading: false,
      };
    case types.DELETE_PAYER:
    case types.ADD_PAYER:
    case types.UPDATE_PAYER:
      return {
        ...state,
        loading: false,
      };
    case types.GET_SINGLE_PAYER:
      return {
        ...state,
        payer: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default payersReducers;
