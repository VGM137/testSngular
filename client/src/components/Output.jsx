import React from "react";
import { useSelector } from "react-redux";
import '../assets/styles/Components/Output.css'

const Output = () => {

  let series = useSelector(state => state.seriesValue)

  return (
    <div className="output-wrapper" >
      <h4>El resultado es:</h4>
      <p className="output-result" data-testid="result">{series}</p>
    </div>
  )
}

export default Output