import React from "react"; // Import React
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import store from "./Components/redux/store";
import { Provider } from "react-redux";

// components
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Courses from "./Components/Courses/Courses";
import Signin from "./Components/Signin/Signin";
import Users from "./Components/Users/Users";
import Dashboard from "./Components/Dashboard/Dashboard";
import Product from "./Components/Product/Product";
import Cart from "./Components/AddtoCart/Cart";

import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Courses" element={<Courses />} />
            <Route path="/Signin" element={<Signin />} />
            <Route path="/Users" element={<Users />} />
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/Product/:id" element={<Product />} />
            <Route path="/Cart" element={<Cart />} />
          </Routes>
        </BrowserRouter>

        <Footer />
      </div>
    </Provider>
  );
}

export default App;
