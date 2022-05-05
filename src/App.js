import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Components/About/About";
import Login from "./Components/Authentication/Login/Login";
import Blogs from "./Components/Blogs/Blogs";
import Home from "./Components/Home/Home";
import Header from "./Components/Shared/Header/Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import SignUp from "./Components/Authentication/SignUp/SignUp";

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
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
