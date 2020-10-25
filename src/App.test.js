import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Home from "./Components/Home";

configure({ adapter: new Adapter() });

it("renders Loading Page when posts are 0 ", () => {
  const posts = [];
  const wrapper = shallow(<Home posts={posts} />);
  const text = wrapper.find("div").text();
  expect(text).toEqual("Loading... Patient is a virtue.........");
});
it("renders correctly once posts is not equal to null ", () => {
  const posts = [1, 2, 3];
  const wrapper = shallow(<Home posts={posts} />);
  expect(wrapper.find("h4").text()).toEqual("Latest Hacker News Stories");
});
