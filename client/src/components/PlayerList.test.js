import React from "react";
import * as rtl from "@testing-library/react";
import "mutationobserver-shim";
import PlayerList from "./PlayerList";

test("PlayerList is rendering", () => {
  rtl.render(<PlayerList />);
});
