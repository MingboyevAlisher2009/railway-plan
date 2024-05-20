import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return <div>
    <Link to={'/super-admin/boshqaruv-paneli'}>Home</Link>
    <Link to={"/login"}>login</Link>
  </div>;
};

export default Home;
