import { render } from 'solid-js/web';

import { RichButton, Props } from '.';

describe('<RichButton />', () => {
  const div = document.createElement('div');
  const props: Props = {
    label: 'test',
    onClick: jest.fn(),
  };
  render(() => <RichButton {...props} />, div);

  it('render', () => {
    expect(div).toBeTruthy();
  });

  it('render text', () => {
    expect(div.textContent).toEqual('test');
  });
});
