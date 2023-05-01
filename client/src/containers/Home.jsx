import React from "react";
import Input from "../components/Input";
import Output from "../components/Output";
import '../assets/styles/Components/Home.css'
import Name from "../components/Name";

const Home = () => {
  return (
    <div className="home-wrapper" >
      <Input />
      <Output />
    </div>
  )
}

export default Home