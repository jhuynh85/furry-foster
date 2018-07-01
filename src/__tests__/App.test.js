import React from "react";
import { shallow } from "enzyme";
import App from "../App";
import Root from "../Root";
import Header from "../components/Header";
import Footer from "../components/Footer";

let wrapped;

beforeEach(() => {
	wrapped = shallow(<App />);
});

it("shows one Header component", () => {
	expect(wrapped.find(Header).length).toEqual(1);
});

it("shows one Footer component", () => {
	expect(wrapped.find(Footer).length).toEqual(1);
});
