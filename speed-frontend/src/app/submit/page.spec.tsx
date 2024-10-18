import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Page from './Page';
import { submitArticle } from '@/services/apiService';

jest.mock('@/services/apiService');

describe('Page Component', () => {
    beforeEach(() => {
        submitArticle.mockClear();
    });

    test('renders form fields correctly', () => {
        render(<Page />);

        expect(screen.getByLabelText(/Title/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Authors/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Journal/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Year/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/DOI/i)).toBeInTheDocument();
    });

    test('shows alert if form is submitted with empty fields', () => {
        window.alert = jest.fn();
        render(<Page />);

        fireEvent.click(screen.getByText(/Submit/i));

        expect(window.alert).toHaveBeenCalledWith('Please fill out all fields.');
    });

    test('calls submitArticle with correct data', async () => {
        submitArticle.mockResolvedValueOnce({ ok: true, json: async () => ({}) });
        render(<Page />);

        fireEvent.change(screen.getByLabelText(/Title/i), { target: { value: 'Test Title' } });
        fireEvent.change(screen.getByLabelText(/Authors/i), { target: { value: 'Test Author' } });
        fireEvent.change(screen.getByLabelText(/Journal/i), { target: { value: 'Test Journal' } });
        fireEvent.change(screen.getByLabelText(/Year/i), { target: { value: 2024 } });
        fireEvent.change(screen.getByLabelText(/DOI/i), { target: { value: '10.1234/testdoi' } });

        fireEvent.click(screen.getByText(/Submit/i));

        expect(submitArticle).toHaveBeenCalledWith({
            title: 'Test Title',
            authors: 'Test Author',
            journal: 'Test Journal',
            year: 2024,
            doi: '10.1234/testdoi'
        });
    });

    test('reloads page on successful submission', async () => {
        submitArticle.mockResolvedValueOnce({ ok: true, json: async () => ({}) });
        const reloadMock = jest.fn();
        delete window.location;
        window.location = { reload: reloadMock };

        render(<Page />);

        fireEvent.change(screen.getByLabelText(/Title/i), { target: { value: 'Test Title' } });
        fireEvent.change(screen.getByLabelText(/Authors/i), { target: { value: 'Test Author' } });
        fireEvent.change(screen.getByLabelText(/Journal/i), { target: { value: 'Test Journal' } });
        fireEvent.change(screen.getByLabelText(/Year/i), { target: { value: 2024 } });
        fireEvent.change(screen.getByLabelText(/DOI/i), { target: { value: '10.1234/testdoi' } });

        fireEvent.click(screen.getByText(/Submit/i));

        expect(reloadMock).toHaveBeenCalled();
    });

    test('shows alert on submission error', async () => {
        submitArticle.mockResolvedValueOnce({ ok: false, json: async () => ({ message: 'Error message' }) });
        window.alert = jest.fn();

        render(<Page />);

        fireEvent.change(screen.getByLabelText(/Title/i), { target: { value: 'Test Title' } });
        fireEvent.change(screen.getByLabelText(/Authors/i), { target: { value: 'Test Author' } });
        fireEvent.change(screen.getByLabelText(/Journal/i), { target: { value: 'Test Journal' } });
        fireEvent.change(screen.getByLabelText(/Year/i), { target: { value: 2024 } });
        fireEvent.change(screen.getByLabelText(/DOI/i), { target: { value: '10.1234/testdoi' } });

        fireEvent.click(screen.getByText(/Submit/i));

        expect(window.alert).toHaveBeenCalledWith('Error message');
    });
});
