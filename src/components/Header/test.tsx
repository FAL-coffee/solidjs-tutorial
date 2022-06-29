import { render } from 'solid-js/web';

import { Header, Props } from '.';

describe('<Header />', () => {
  const div = document.createElement('div');
  const props: Props = {};
  render(() => <Header {...props} />, div);

  it('render', () => {
    expect(div).toBeTruthy();
  });
});
