import { render } from "solid-js/web";

import { CommunicationWindow, Props } from ".";

describe("<CommunicationWindow />", () => {
  const div = document.createElement("div");
  const props: Props = {};
  render(() => <CommunicationWindow {...props} />, div);

  it("render", () => {
    expect(div).toBeTruthy();
  });
});
