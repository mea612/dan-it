import React from 'react';
import { render }  from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from '../components/Button/Button';


describe('component Button', () => {
    it('Should render properly', () => {
        const { getByRole } = render(<Button title="Add" onClick={() => {}}/>);
        const button = getByRole('button', { name: /add/i });
        expect(button).toBeVisible();
    });

    it('should call onClick props when clicked', () => {
        const onClick = jest.fn();
        const { getByRole } = render(<Button title="Add" onClick={onClick}/>);
        const button = getByRole('button', { name: /add/i });
        userEvent.click(button);
        expect(onClick).toHaveBeenCalled();
    })
});
