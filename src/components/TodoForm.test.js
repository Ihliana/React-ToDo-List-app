
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom';
//to test user interactions 
import user from '@testing-library/user-event'

import TodoForm from './TodoForm';

describe("testing TodoForm component", () => {
    test('renders input and button elements', () => {
        render(<TodoForm />)

        const inputElement = screen.getByPlaceholderText("Add a new task")

        const buttonElement = screen.getByRole('button', {
            name: /Add/i
        })

        expect(inputElement).toBeInTheDocument()
        expect(buttonElement).toBeInTheDocument()
    })
})