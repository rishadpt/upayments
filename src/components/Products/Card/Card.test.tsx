import { render } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import Card from "./Card"


test("Card",()=>{
    render(<BrowserRouter>
    <Card name="apple"  id="60" price={120} image="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp-spacegray-select-202206?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1653493200207" />
    </BrowserRouter>)  
})

// test Link to product page






