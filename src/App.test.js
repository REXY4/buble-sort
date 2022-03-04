import { render, screen } from '@testing-library/react';
import App from './App';
import { BubleSortAction } from './helper/actionTesting';
import { Provider } from 'react-redux';
import { store } from './reduxs/stores';


test('Title', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  ///learn react/i
  //
  const linkElement = screen.getByText(/Add Data/i);
  expect(linkElement).toBeInTheDocument();
});

test('input', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  ///learn react/i
  //
  const linkElement = screen.getByTestId('input');
  
  expect(linkElement).toBeInTheDocument();
});


test('button', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  ///learn react/i
  //
  const linkElement = screen.getByTestId('button');
  
  expect(linkElement).toBeInTheDocument();
});



test('Bubble sort', () => {
  
  // let route = useHistory();
  expect(BubleSortAction(10)).toBe(10);
});


