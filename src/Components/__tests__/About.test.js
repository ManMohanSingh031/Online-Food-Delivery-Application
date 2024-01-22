
import { render, screen } from "@testing-library/react";
import About from "../About";
import"@testing-library/jest-dom";


test('Should load About-us', () => { 
    render(<About />)
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
    });