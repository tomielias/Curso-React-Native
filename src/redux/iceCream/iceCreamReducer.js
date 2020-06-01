import { BUY_ICE_CREAM } from "./iceCreamTypes";

const initialState = {
  numOfIceCreams: 10,
};

const iceCreamReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_ICE_CREAM:
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams - 1,
      };
    default:
      return state;
  }
};

export default iceCreamReducer;
