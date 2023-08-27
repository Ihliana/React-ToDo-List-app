import {render, screen, fireEvent} from "@testing-library/react"
import '@testing-library/jest-dom';

import Navbar from "./Navbar"



describe("Navbar component", () => {
    test("Navbar displays light and dark mode buttons", () => {
        const toggleDarkMode = jest.fn();    //Mock toggleDarkMode function 
        const darkMode = false;

        render(<Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />)

        const lightBtn = screen.getByText("Light")
        const darkBtn = screen.getByText("Dark")


        expect(lightBtn).toBeInTheDocument()
        expect(darkBtn).toBeInTheDocument()
    })

})