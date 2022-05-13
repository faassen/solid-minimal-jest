import { cleanup, fireEvent, render, screen } from "solid-testing-library";
import { Counter } from "./component";

describe("Count", () => {
  afterEach(cleanup);
  test("it starts with zero", () => {
    render(() => <Counter />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("Count: 0");
  });

  test("it increases its value on click", async () => {
    render(() => <Counter />);
    const button = screen.getByRole("button");
    fireEvent.click(button);
    // the event loop takes one Promise to resolve to be finished
    await Promise.resolve();
    expect(button).toHaveTextContent("Count: 1");
    fireEvent.click(button);
    await Promise.resolve();
    expect(button).toHaveTextContent("Count: 2");
  });
});

export {};
