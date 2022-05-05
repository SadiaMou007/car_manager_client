import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Components/About/About";
import Login from "./Components/Authentication/Login/Login";
import Blogs from "./Components/Blogs/Blogs";
import Home from "./Components/Home/Home";
import Header from "./Components/Shared/Header/Header";
import SignUp from "./Components/Authentication/SignUp/SignUp";
import NotFoundPage from "./Components/Shared/NotFoundPage/NotFoundPage";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RequireAuth from "./Components/RequireAuth/RequireAuth";
import ManageItem from "./Components/PrivateRoutes/ManageItem/ManageItem";
import AddItem from "./Components/PrivateRoutes/AddItem/AddItem";
import MyItem from "./Components/PrivateRoutes/MyItem/MyItem";
import Inventories from "./Components/Home/Inventories/Inventories";
import InventoryDetail from "./Components/Home/InventoryDetail/InventoryDetail";
import Inventory from "./Components/Home/Inventory/Inventory";
import Footer from "./Components/Shared/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route
          path="/manageItem"
          element={
            <RequireAuth>
              <ManageItem></ManageItem>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/addItem"
          element={
            <RequireAuth>
              <AddItem></AddItem>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/myItem"
          element={
            <RequireAuth>
              <MyItem></MyItem>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/inventories"
          element={<Inventories></Inventories>}
        ></Route>
        <Route
          path="/inventory/:inventoryId"
          element={
            <RequireAuth>
              <InventoryDetail></InventoryDetail>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/inventory"
          element={
            <RequireAuth>
              <Inventory></Inventory>
            </RequireAuth>
          }
        ></Route>
        <Route path="*" element={<NotFoundPage></NotFoundPage>}></Route>
      </Routes>
      <ToastContainer />
      <Footer></Footer>
    </div>
  );
}

export default App;
