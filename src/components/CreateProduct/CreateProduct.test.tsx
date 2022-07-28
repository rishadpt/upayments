import { render, fireEvent, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import CreateProduct from "./CreateProduct";

test("create product",()=>{
    render(<BrowserRouter>
    <CreateProduct/>
    </BrowserRouter>
    )
})


