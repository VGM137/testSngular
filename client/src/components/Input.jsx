import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { seriesValue } from "../actions";
import Series from "../utils/series";
import '../assets/styles/Components/Input.css'

const Input = () => {

  let [value, setValue] = useState('n')
  let [primo, setPrimo] = useState('primo(n+3)')
  let [triangle, setTriangle] = useState('triangular(n-1)')
  let [fib, setFib] = useState('fibonacci(n-2)')
  let dispatch = useDispatch()

  const handleChange = (e) => {
    let targetValue = e.target.value
    let valid = targetValue === '' || targetValue === '0' || targetValue === '1' || targetValue == 2
    
    if(!valid){
      targetValue = parseInt(e.target.value)
      setValue(targetValue)
      let serie = new Series()
      let newSeriesValue = parseFloat(serie.doOperation(targetValue).toFixed(2))
  
      let primoValue = serie.getPrime(targetValue)
      let triangleValue = serie.getTriangle(targetValue)
      let fibValue = serie.getFibonacci(targetValue)
  
      setPrimo(primoValue)
      setTriangle(triangleValue)
      setFib(fibValue)
      
      dispatch(seriesValue(newSeriesValue ))
    }else{
      setValue('n')
      setPrimo('primo(n+3)')
      setTriangle('triangular(n-1)')
      setFib('fibonacci(n-2)')
      dispatch(seriesValue(0))
    }
  }

  return (
    <div className="input-wrapper">
      <input aria-labelledby="inputN" className="input-number" placeholder="0" type="number" min={0} onChange={(e) => handleChange(e)} ></input>
      <label id="inputN" htmlFor='inputN'>Ingresa el valor de "n"</label>
      <div className="input-description__wrapper">
        <div className="input-descripcion__operation">
          <p className="serie">series({value}) = </p>
          <p className="primotriangular">primo({value}+3) &#xb7; triangular({value}-1)</p>
          <p className="fib">fibonacci({value}-2)</p>
        </div>
      </div>
      <div className="input-description__wrapper">
        <div className="input-descripcion__operation">
          <p className="serie">series({value}) = </p>
          <p className="primotriangular">{primo} &#xb7; {triangle}</p>
          <p className="fib">{fib}</p>
        </div>
      </div>
    </div>
  )
}

export default Input