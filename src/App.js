import "./App.css";

import BookStore from "./Component/Redux/Bookstores";
import UserList from "./Component/Pages/UserList";
import ProductList from "./Component/Pages/ProductList";
import { BrowserRouter, Route,  Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BookStore />}/>
          <Route path="/users" element={  <UserList/>}/>
          <Route path="/products" element={ <ProductList/>}/>
        </Routes>
      </BrowserRouter>
      

       
       
        
    
    </div>
  );
}

export default App;
