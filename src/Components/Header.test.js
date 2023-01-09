import { fireEvent, render, screen } from '@testing-library/react';
import * as router from 'react-router';

import Header from './Header';

describe('Header component', () => {
    const navigate = jest.fn();

    beforeEach(() => {
        jest.spyOn(router, 'useNavigate').mockImplementation(() => navigate)
    })

     test('render header component without crashing', () => {
        render(<Header />);
    })

    test('render the menu item and navigates to /home on click', () => {
         const {getByTestId} = render(<Header />);
         fireEvent.click(getByTestId(/home-menu-item/i))
       
        expect(navigate).toHaveBeenCalledWith('/home');
    })
})