import { Story, Meta } from "@storybook/html";

import { render } from "solid-js/web";
import { Header, Props } from ".";

export default {
  title: "Header",
} as Meta;

const Template: Story<Props> = (args: Props) => {
  const div = document.createElement("div");
  render(() => <Header {...args} />, div);
  return div;
};

export const nomal = Template.bind({});
nomal.args = {};
