import { render,screen } from "@testing-library/react"
import App from "./App"


test("Main app", () => {
    render(
        <App />
    )
})

test('renders upayments store link', () => {
    render(<App />);
    const linkElement = screen.getByText(/Upayments Store/i);
    expect(linkElement).toBeInTheDocument();
  });

//   test('renders add product', () => {
//     render(<App />);
//     const linkElement = screen.getByRole("div", { name: "create-container" });
//     expect(linkElement).toBeInTheDocument();
//   });

