import React from "react";
import * as rtl from "@testing-library/react";
import "mutationobserver-shim";
import App from "./App";

test("app is rendering", () => {
  rtl.render(<App />);
});

// test("header text renders", () => {
//   const wrapper = rtl.render(<App />);

//   const element = wrapper.getByText(/welcome/i);
//   expect(element).toBeInTheDocument();
// });
