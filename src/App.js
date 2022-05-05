import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Components/About/About";
import Login from "./Components/Authentication/Login/Login";
import Blogs from "./Components/Blogs/Blogs";
import Home from "./Components/Home/Home";
import Header from "./Components/Shared/Header/Header";

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
      </Routes>
    </div>
  );
}

export default App;
