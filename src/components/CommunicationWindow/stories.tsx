import { Story, Meta } from '@storybook/html';
import { action } from '@storybook/addon-actions';

import { render } from 'solid-js/web';
import { CommunicationWindow, Props } from '.';
import { RichButton } from '../RichButton';

export default {
  title: 'CommunicationWindow',
} as Meta;

const Template: Story<Props> = (args: Props) => {
  const div = document.createElement('div');
  render(() => <CommunicationWindow {...args} />, div);
  return div;
};

export const nomal = Template.bind({});
nomal.args = {
  title: 'title text',
  text: 'text content',
  onClick: action('onClick'),
};

export const children = Template.bind({});
children.args = {
  title: 'title text',
  children: <RichButton label="text" onClick={action('onClick')} />,
  onClick: action('onClick'),
};
