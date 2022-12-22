import { render, screen } from '@testing-library/react';
import JobLists from '../Components/JobLists';

test('It should display the lists of jobs', () => {
render(<JobLists />);
})