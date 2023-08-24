
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom';
//to test user interactions 
import userEvent from '@testing-library/user-event'

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


    test('input captures user input', async ()=> {
      render(<TodoForm />)

        const inputElement = screen.getByPlaceholderText("Add a new task")

        /* simulate a user adding a new task*/
        await userEvent.type(inputElement, 'New task text')

        expect(inputElement).toHaveValue('New task text')
    })

    test('button text changes based on editId', () => {
        render(<TodoForm editId={123} />)

        const editBtn = screen.getByRole("button", {
            name: /edit/i
        })

        expect(editBtn).toBeInTheDocument()
    })

    test('calls handleSubmit when form is submitted', async () => {
        const handleSubmit = jest.fn()
        render(<TodoForm handleSubmit={handleSubmit} />)

        const inputElement = screen.getByPlaceholderText("Add a new task");
        const buttonElement = screen.getByRole("button", {
            name: /add/i 
        })

        await userEvent.type(inputElement, "New task text")
        await userEvent.click(buttonElement)

        expect(handleSubmit).toHaveBeenCalledTimes(1)



    })
})