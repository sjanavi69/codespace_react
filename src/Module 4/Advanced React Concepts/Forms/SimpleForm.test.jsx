import { render, screen, fireEvent } from '@testing-library/react';
import SimpleForm from './SimpleForm';

describe('SimpleForm', () => {
  test('renders inputs and updates values correctly', () => {
    render(<SimpleForm />);
    const usernameInput = screen.getByLabelText(/username/i);
    const emailInput = screen.getByLabelText(/email/i);

    fireEvent.change(usernameInput, { target: { value: 'janavi' } });
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });

    expect(screen.getByText(/janavi/i)).toBeInTheDocument();
    expect(screen.getByText(/test@example.com/i)).toBeInTheDocument();
  });

  test('shows error on blur for empty username', () => {
    render(<SimpleForm />);
    const usernameInput = screen.getByLabelText(/username/i);
    fireEvent.blur(usernameInput);
    expect(screen.getByText(/username is required/i)).toBeInTheDocument();
  });

  test('shows error on invalid email', () => {
    render(<SimpleForm />);
    const emailInput = screen.getByLabelText(/email/i);
    fireEvent.change(emailInput, { target: { value: 'invalidemail' } });
    fireEvent.blur(emailInput);
    expect(screen.getByText(/invalid email format/i)).toBeInTheDocument();
  });
});
