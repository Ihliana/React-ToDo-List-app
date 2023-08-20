import {screen, render} from "@testing-library/react"

import '@testing-library/jest-dom'

import App from "./App"


describe("App renders correctly", () => {
    test('elements renders correctly', () => {
        render(<App />)

        const headingElement = screen.getByRole('heading', {
            level: 1
        })
        expect(headingElement).toBeInTheDocument()
       
        
        const titleElement = screen.getByText(/Todo List App/i);
        expect(titleElement).toBeInTheDocument();

    })

    test('renders input field and add button', () => {
        render(<App />)

        const inputElement = screen.getByPlaceholderText(/Add a new task/i)
        expect(inputElement).toBeInTheDocument()

        const addButton = screen.getByText("Add")
        expect(addButton).toBeInTheDocument()
    })

    test('renders a todo element with text and buttons', () => {
            render(<App />)

            //find the existing todo item's text 
            const todoTextElement = screen.getByText(/Learn React/i)
            expect(todoTextElement).toBeInTheDocument()

            //find the buttons withing the todo item
            const editBtn = screen.getByTestId("edit-button")
            const deleteBtn = screen.getByTestId("delete-button")

            expect(editBtn).toBeInTheDocument()
            expect(deleteBtn).toBeInTheDocument()
    })

})