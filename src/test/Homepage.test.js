// HomePage.test.js
import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
// import '@testing-library/jest-dom/extend-expect';
import axios from 'axios';
import HomePage from '../Page/HomePage';

jest.mock('axios');

test('displays weather information after typing a location and fetching data', async () => {
  const mockData = {
    data: {
      location: {
        country: 'Test Country',
        name: 'Test Location'
      },
      current: {
        condition: {
          icon: 'test-icon-url',
          text: 'Sunny'
        },
        temp_c: 25
      }
    }
  };
  
  axios.get.mockResolvedValue(mockData);

  const { getByPlaceholderText, getByText, getByAltText, queryByText } = render(<HomePage />);
  
  const input = getByPlaceholderText('Enter a location');
  
  fireEvent.change(input, { target: { value: 'Test Location' } });

  await waitFor(() => expect(axios.get).toHaveBeenCalledTimes(1));
  
  expect(queryByText('WeatherNow: Instant Weather Updates for Your Location')).toBeInTheDocument();
  
  await waitFor(() => {
    expect(getByText('This is Test Country')).toBeInTheDocument();
    expect(getByText('Test Location')).toBeInTheDocument();
    expect(getByAltText('Sunny')).toBeInTheDocument();
    expect(getByText('Sunny')).toBeInTheDocument();
    expect(getByText('25°C')).toBeInTheDocument();
  });
});

test('displays an error message if the API call fails', async () => {
  axios.get.mockRejectedValue(new Error('Network Error'));

  const { getByPlaceholderText, getByText } = render(<HomePage />);

  const input = getByPlaceholderText('Enter a location');

  fireEvent.change(input, { target: { value: 'Invalid Location' } });

  await waitFor(() => expect(axios.get).toHaveBeenCalledTimes(1));

  await waitFor(() => {
    expect(getByText('An error occurred')).toBeInTheDocument();
  });
});
