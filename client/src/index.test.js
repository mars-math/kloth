import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

// dummy test
it('one is one', () => {
  expect(1).toEqual(1);
});
