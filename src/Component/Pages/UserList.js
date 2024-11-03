import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UserListDataFetched } from "../Redux/BuyBookAction";

const UserList = () => {
  const userListData = useSelector((state) => state.userListData);
  const error = useSelector((state) => state.error);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(UserListDataFetched());
  }, [dispatch]);
   
  return (
    <div>
      <h2>User List</h2>
      {error && <p>Error fetching books: {error}</p>}

      <ul>
        {userListData.map((users) => (
          <li key={users.username}> {users.name.lastname}</li> 
          // Adjust according to your book structure
        ))}
      </ul>
    </div>
  );
};

export default UserList;
