import { render, screen } from '@testing-library/react';
import * as router from 'react-router';
import Header from '../Components/Header';
import CoverPage from '../Components/CoverPage';

describe('CoverPage Component', () => {
    const navigate = jest.fn();

    beforeEach(() => {
        jest.spyOn(router, 'useNavigate').mockImplementation(() => navigate)
    })

    test('render header component in cover page component', () => {
        render(<CoverPage />);
        render(<Header />);
    })

    test('render the image', () => {
        render(<CoverPage />);
        const image = screen.getAllByRole('img');
        expect(image[0]).toBeInTheDocument();
    })
})
