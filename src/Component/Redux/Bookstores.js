import React from "react";
import { useDispatch, useSelector } from "react-redux";
import BuyBookAction, { addBooks} from "./BuyBookAction";

const BookStore = () => {
  const numberOfBooks = useSelector((state) => state.NumberOBooks);
  const dispatch = useDispatch();
 

  return (
    <div>
      <h1>Number of Books: {numberOfBooks}</h1>
      <button
        onClick={() => {
          dispatch(BuyBookAction());
        }}
        disabled={numberOfBooks>0? false :true}
      >
        Buy Book
      </button>
      <button onClick={() => dispatch(addBooks())}>Add Book</button>

    
    </div>
  );
};

export default BookStore;
