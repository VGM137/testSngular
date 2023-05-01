import React from "react";
import { useSelector } from "react-redux";

const Output = () => {

  let series = useSelector(state => state.seriesValue)

  return (
    <div className="output-wrapper" >
      <p className="output-result" data-testid="result">= {series}</p>
    </div>
  )
}

export default Output