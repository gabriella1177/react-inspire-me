import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { mount, shallow } from '../setupTests';


describe('App component test', () => {
  it('renders the component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('.App')).toBeDefined();
  })
})