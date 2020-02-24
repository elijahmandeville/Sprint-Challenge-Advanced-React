import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "mutationobserver-shim";
import NavBar from "./NavBar";

test("NavBar is rendering", () => {
  render(<NavBar />);
});
