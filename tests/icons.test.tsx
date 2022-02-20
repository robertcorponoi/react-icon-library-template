import React from "react";
import { render } from "@testing-library/react";

import JestTestSolidIcon from "../solid/JestTestIcon";
import JestTestOutlineIcon from "../outline/JestTestIcon";

it("Solid icons should have their fill attribute set to currentColor", () => {
    const { container } = render(<JestTestSolidIcon />,);

    const svg = container.querySelector("svg");
    expect(svg.getAttribute("fill")).toEqual("currentColor");
});

it("Outline icons should have their stroke attribute set to currentColor", () => {
    const { container } = render(<JestTestOutlineIcon />,);

    const svg = container.querySelector("svg");
    expect(svg.getAttribute("stroke")).toEqual("currentColor");
});
