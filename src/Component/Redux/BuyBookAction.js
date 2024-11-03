import {
  add_books,
  buy_books,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
  FETCH_PRODUCT_SUCCESS,
  FETCH_PRODUCT_FAILURE,
} from "./constants";
import UserListDataFetch from "../Services/UsersList";
import ProductListService from "../Services/ProductListService";

const BuyBookAction = () => {
  return {
    type: buy_books,
  };
};

export const addBooks = () => {
  return {
    type: add_books,
  };
};

export const UserListDataFetched = () => {
  return async (dispatch) => {
    try {
      const usersListData = await UserListDataFetch();
      dispatch({ type: FETCH_USERS_SUCCESS, payload: usersListData }); // Dispatch action on success
    } catch (error) {
      dispatch({ type: FETCH_USERS_FAILURE, payload: error.message }); // Dispatch action on error
    }
  };
};

export const ProductListDataAction = () => {
  return async (dispatch) => {
    try {
      const productListData = await ProductListService();
      dispatch({
        type: FETCH_PRODUCT_SUCCESS,
        payload: productListData,
      });
    } catch (error) {
      dispatch({
        type: FETCH_PRODUCT_FAILURE,
        payload: error.message,
      });
    }
  };
};

export default BuyBookAction;
