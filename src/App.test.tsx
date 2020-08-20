import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

import renderer from "react-test-renderer";

test("renders learn react link", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

it("App renders correctly", () => {
  const tree = renderer(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});