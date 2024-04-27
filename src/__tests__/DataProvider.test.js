const React = require('react');
const { render } = require('@testing-library/react');
const axios = require('axios');
const { DataProvider } = require('../DataProvider');

jest.mock('axios');

describe('DataProvider component', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('fetches data successfully from an API', async () => {
    const mockData = [
      { id: 1, name: 'Product 1', price: 10 },
      { id: 2, name: 'Product 2', price: 20 },
    ];

    axios.get.mockResolvedValueOnce({ data: mockData });

    const { getByText } = render(
      React.createElement(DataProvider, null, React.createElement('div', null, 'Child Component'))
    );

    expect(axios.get).toHaveBeenCalledWith('https://api.example.com/data');
    expect(getByText('Child Component')).toBeInTheDocument();
  });

  it('handles API request failure', async () => {
    const mockError = new Error('API request failed');
    axios.get.mockRejectedValueOnce(mockError);

    const consoleSpy = jest.spyOn(console, 'log');

    render(
      React.createElement(DataProvider, null, React.createElement('div', null, 'Child Component'))
    );

    expect(consoleSpy).toHaveBeenCalledWith(mockError);
  });
});
