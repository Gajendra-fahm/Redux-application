import "./App.css";

import BookStore from "./Component/Redux/Bookstores";
import UserList from "./Component/Pages/UserList";
import ProductList from "./Component/Pages/ProductList";
import { BrowserRouter, Route,  Routes } from "react-router-dom";
import HomeDemo from "./Component/Pages/HomeDemo";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BookStore />}/>
          <Route path="/users" element={  <UserList/>}/>
          <Route path="/products" element={ <ProductList/>}/>
          <Route path="/homedemo" element ={<HomeDemo/>}/>
        </Routes>
      </BrowserRouter>
      

       
       
        
    
    </div>
  );
}

export default App;
