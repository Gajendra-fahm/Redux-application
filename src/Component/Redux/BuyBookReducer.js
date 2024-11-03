import {
  add_books,
  buy_books,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
  FETCH_PRODUCT_SUCCESS,
  FETCH_PRODUCT_FAILURE,

} from "./constants";

const initialState = {
  NumberOBooks: 20,
  userListData: [],
  error: null,
  productListData:[]
};

const BuyBookReducer = (state = initialState, action) => {
  switch (action.type) {
    case buy_books:
        if(state.NumberOBooks> 0){
            return {
                ...state,
                NumberOBooks: state.NumberOBooks - 1,
              };
        }
     
    case add_books:
      return {
        ...state,
        NumberOBooks: state.NumberOBooks + 1,
      };
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        userListData: action.payload,
      };
    case FETCH_PRODUCT_SUCCESS:
        return {
            ...state,
            productListData:action.payload
        }  
    default:
      return state;
  }
};

export default BuyBookReducer;
