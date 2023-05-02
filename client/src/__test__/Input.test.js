import 'jsdom-global/register'
import '@testing-library/jest-dom'
import React from 'react'
import {screen, render, fireEvent} from '@testing-library/react'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from '../reducers';
import Input from '../components/Input'
import Output from '../components/Output';

const initialState = {
  seriesValue: 0
}

const store = createStore(reducer, initialState)

const setup = () => {
  const utils = render(
    <Provider store={store}>
      <Input />
      <Output />
    </Provider>
  )
  const input = screen.getByLabelText("Ingresa el valor de 'n'")
  const output = screen.getByTestId("result")
  return {
    input,
    output,
    ...utils,
  }
}

test('When n 0, series equals 0', () => {
  const {input, output} = setup()
  fireEvent.change(input, {target: {value: '0'}})
  expect(output).toHaveTextContent('0')
})
test('When n 1, series equals 0', () => {
  const {input, output} = setup()
  fireEvent.change(input, {target: {value: '1'}})
  expect(output).toHaveTextContent('0')
})
test('When n 2, series equals 0', () => {
  const {input, output} = setup()
  fireEvent.change(input, {target: {value: '2'}})
  expect(output).toHaveTextContent('0')
})
test('When n 3, series equals 39', () => {
  const {input, output} = setup()
  fireEvent.change(input, {target: {value: '3'}})
  expect(output).toHaveTextContent('39')
})
test('When n 4, series equals 102', () => {
  const {input, output} = setup()
  fireEvent.change(input, {target: {value: '4'}})
  expect(output).toHaveTextContent('102')
})
test('When n 5, series equals 95', () => {
  const {input, output} = setup()
  fireEvent.change(input, {target: {value: '5'}})
  expect(output).toHaveTextContent('95')
})
test('When n 6, series equals 115', () => {
  const {input, output} = setup()
  fireEvent.change(input, {target: {value: '6'}})
  expect(output).toHaveTextContent('115')
})
test('When n 7, series equals 121', () => {
  const {input, output} = setup()
  fireEvent.change(input, {target: {value: '7'}})
  expect(output).toHaveTextContent('121')
})
test('When n 8, series equals 108', () => {
  const {input, output} = setup()
  fireEvent.change(input, {target: {value: '8'}})
  expect(output).toHaveTextContent('108')
})
test('When n 9, series equals 102', () => {
  const {input, output} = setup()
  fireEvent.change(input, {target: {value: '9'}})
  expect(output).toHaveTextContent('102')
})
