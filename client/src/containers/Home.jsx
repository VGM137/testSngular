import React from "react";
import Input from "../components/Input";
import Output from "../components/Output";
import '../assets/styles/Components/Home.css'
import Name from "../components/Name";

const Home = () => {
  return (
    <div className="home-wrapper" >
      <h1>SNGULAR</h1>
      <h2>Frontend test</h2>
      <h3>Victor Garza</h3>
      <Input />
      <Output />
    </div>
  )
}

export default Home