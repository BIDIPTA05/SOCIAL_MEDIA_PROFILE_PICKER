import React from 'react';
import {render, waitFor} from '@testing-library/react-native';
import Homescreen from '../components/Homescreen';

describe('Homescreen Component', () => {
  beforeEach(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve([
            {_id: '1', name: 'John Doe', age: 30, profilePicture: ''},
          ]),
      }),
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
  it('renders correctly', async () => {
    const {getByText} = render(<Homescreen />);
    await waitFor(() => {
      expect(getByText('Social Media Profile Picker')).toBeTruthy();
    });
  });
});
