import { Story, Meta } from '@storybook/html';

import { render } from 'solid-js/web';
import { RichButton, Props } from '.';

export default {
  title: 'RichButton',
  argTypes: { onClick: { action: 'onClick' } },
} as Meta;

const Template: Story<Props> = (args: Props) => {
  const div = document.createElement('div');
  render(() => <RichButton {...args} />, div);
  return div;
};

export const nomal = Template.bind({});
nomal.args = { label: 'active' };
