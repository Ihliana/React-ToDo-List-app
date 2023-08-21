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

 })