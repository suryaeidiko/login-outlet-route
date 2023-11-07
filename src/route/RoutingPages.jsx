import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../components/login";
import User from "../components/UserPage/User";
import About from "../components/About/About";
import Contact from "../components/About/Contact";
import PrivateRoute from "../components/Private/PrivateRoute";

const RoutingPages = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<User />}>
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
          </Route>

          {/* <Route path='/private' element = {<PrivateRoute />}>
          <Route path="about" element = {<About />} />
          <Route path='contact' element = {<Contact />} />
          </Route>*/}
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default RoutingPages;
