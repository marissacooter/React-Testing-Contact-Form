import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import ContactForm from './ContactForm';

test('Testing to see if inputs are visible', () => {
    const {getByTestId} = render (<ContactForm/>)
    getByTestId('firstName')
    getByTestId('lastName')
    getByTestId('email')
    getByTestId('message')
})

