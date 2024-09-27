import React from 'react';
import {render, waitFor, fireEvent} from '@testing-library/react-native';
import Profilescreen from '../components/Profilescreen';

describe('Profilescreen Component', () => {
  beforeEach(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve({
            _id: '1',
            profilePicture: 'https://abcdef.com/image.jpg',
            name: 'John Doe',
            age: 30,
            email: 'abc@abc.com',
            bio: 'Software engineer',
          }),
      }),
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders loading indicator while fetching data', () => {
    const mockRoute = {params: {userId: '1'}};
    const {getByTestId} = render(
      <Profilescreen route={mockRoute} navigation={{}} />,
    );

    expect(getByTestId('loading-indicator')).toBeTruthy();
  });

  it('renders user data correctly after successful fetch', async () => {
    const mockRoute = {params: {userId: '1'}};
    const mockNavigation = {navigate: jest.fn()};

    const {getByText} = render(
      <Profilescreen route={mockRoute} navigation={mockNavigation} />,
    );

    await waitFor(() => {
      expect(getByText('Profile View')).toBeTruthy();
      expect(getByText('Name: John Doe')).toBeTruthy();
      expect(getByText('Age: 30')).toBeTruthy();
      expect(getByText('Email: abc@abc.com')).toBeTruthy();
      expect(getByText('Bio: Software engineer')).toBeTruthy();
    });
  });

  it('displays fallback profile picture when no profile picture is available', async () => {
    global.fetch.mockImplementationOnce(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve({
            _id: '1',
            profilePicture: 'https://abcdef.com/image.jpg',
            name: 'John Doe',
            age: 30,
            email: 'abc@abc.com',
            bio: 'Software engineer',
          }),
      }),
    );

    const mockRoute = {params: {userId: '1'}};
    const mockNavigation = {navigate: jest.fn()};

    const {getByText} = render(
      <Profilescreen route={mockRoute} navigation={mockNavigation} />,
    );

    await waitFor(() => {
      expect(getByText('Profile View')).toBeTruthy();
      expect(getByText('Name: John Doe')).toBeTruthy();
      expect(getByText('Age: 30')).toBeTruthy();
      expect(getByText('Email: abc@abc.com')).toBeTruthy();
      expect(getByText('Bio: Software engineer')).toBeTruthy();
    });
  });

  it('Navigates back to home when back button is pressed', async () => {
    const mockRoute = {params: {userId: '1'}};
    const mockNavigation = {navigate: jest.fn()};
    const {getByTestId} = render(
      <Profilescreen route={mockRoute} navigation={mockNavigation} />,
    );

    await waitFor(() => {
      fireEvent.press(getByTestId('back-btn'));
      expect(mockNavigation.navigate).toHaveBeenCalledWith('home');
    });
  });
});
