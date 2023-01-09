import { fireEvent, render } from '@testing-library/react';
import * as router from 'react-router';

import ApplyforJob from './ApplyforJob';

describe('ApplyforJob Component', () => {

    const navigate = jest.fn();

    beforeEach(() => {
        jest.spyOn(router, 'useNavigate').mockImplementation(() => navigate)
    })

    test('render <ApplyforJob /> without any fail', () => {
        render(<ApplyforJob />);
    });

    test('render input components', () => {
        const { getByTestId } = render(<ApplyforJob />);
        const inputElment = getByTestId(/fname/i);
        expect(inputElment).toBeInTheDocument();
    })

    test('render input for first name', () => {
        const { getByTestId } = render(<ApplyforJob />)
        const element = getByTestId(/fname/i);
        const firstNameElement = element.children[0];
        fireEvent.change(firstNameElement, { target: { value: 'Rinky Mondal' } });
        expect(firstNameElement).toHaveValue('Rinky Mondal');
    })
})