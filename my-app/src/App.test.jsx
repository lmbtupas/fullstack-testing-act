import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';
import Button from './components/Button';
import TextInput from './components/TextInput';
import LoginForm from './components/LoginForm';

describe('App', () => {
  it('should render the App', () => {
    const { getByText, getByPlaceholderText } = render(<LoginForm />);
    expect(getByPlaceholderText('Username')).toBeInTheDocument();
    expect(getByPlaceholderText('Password')).toBeInTheDocument();
    expect(getByText('Login')).toBeInTheDocument();
  });

  it('should enable the button if two textboxes were typed', () => {
    const { getByPlaceholderText, getByText } = render(<App />);
    const usernameInput = getByPlaceholderText('Username');
    const passwordInput = getByPlaceholderText('Password');
    const loginButton = getByText('Login');

    fireEvent.change(usernameInput, { target: { value: 'root' } });
    fireEvent.change(passwordInput, { target: { value: 'root' } });

    expect(loginButton).not.toBeDisabled();
  });
});

describe('Button', () => {
  it('should render the button', () => {
    const { getByText } = render(<Button>Test Button</Button>);
    expect(getByText('Test Button')).toBeInTheDocument();
  });

  it('should be clicked', () => {
    const handleClick = vi.fn();
    const { getByText } = render(<Button onClick={handleClick}>Test Button</Button>);
    fireEvent.click(getByText('Test Button'));
    expect(handleClick).toHaveBeenCalled();
  });

  it('should be disabled', () => {
    const { getByText } = render(<Button disabled>Test Button</Button>);
    expect(getByText('Test Button')).toBeDisabled();
  });

  it('should render the text inside the button correctly', () => {
    const { getByText } = render(<Button>Test Button</Button>);
    expect(getByText('Test Button')).toBeInTheDocument();
  });
});

describe('TextInput', () => {
  it('should be rendered', () => {
    const { getByPlaceholderText } = render(<TextInput placeholder="Test Input" />);
    expect(getByPlaceholderText('Test Input')).toBeInTheDocument();
  });

  it('should be able to type', () => {
    const { getByPlaceholderText } = render(<TextInput placeholder="Test Input" />);
    const input = getByPlaceholderText('Test Input');
    fireEvent.change(input, { target: { value: 'test' } });
    expect(input.value).toBe('test');
  });

  it('should render the label', () => {
    const { getByPlaceholderText } = render(<TextInput placeholder="Test Input" />);
    expect(getByPlaceholderText('Test Input')).toBeInTheDocument();
  });
});