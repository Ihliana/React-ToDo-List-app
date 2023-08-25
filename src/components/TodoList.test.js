import {render, screen, fireEvent} from '@testing-library/react'
import '@testing-library/jest-dom';

import TodoList from './TodoList';

describe("TodoList", () => {
    //example mock todos for testing

    const mockTodos = [
        {id: 1, todo: 'Buy groceries'}, 
        {id: 2, todo: 'Walk the dog'}
    ]

    //mock functions for handleEdit and handleDelete
    const mockHandleEdit = jest.fn() 
    const mockHandleDelete = jest.fn()

    test('renders todo list with correct items', () => {
        render(<TodoList todos={mockTodos} handleEdit={mockHandleEdit} handleDelete={mockHandleDelete}/>)

        //check if all todo items are rendered
        mockTodos.forEach((todo) => {
            const todoText = screen.getByText(todo.todo)
            expect(todoText).toBeInTheDocument()
        })
    })


    test('calls handleEdit when edit button is clicked', () => {
        render(<TodoList todos={mockTodos} handleDelete={mockHandleDelete} handleEdit={mockHandleEdit} />)

        //click the edit button for the first todo
        const editBtn = screen.getByTestId('edit-button-1')
        fireEvent.click(editBtn)

        //check if the handleEdit function was called with the correct id
        expect(mockHandleEdit).toHaveBeenCalledWith(1)
    })

    test('calls handleDelete when delete button is clicked', () => {
        render(<TodoList todos={mockTodos} handleDelete={mockHandleDelete} handleEdit={mockHandleEdit}  />)

        //click the delete button for the second todo
        const deleteBtn = screen.getByTestId('delete-button-2')
        fireEvent.click(deleteBtn)

        //check if the handleDelete function was called with the correct id
        expect(mockHandleDelete).toHaveBeenCalledWith(2)
    })
})