import { Component, Match } from "solid-js";
import { Switch } from "solid-js";
import { Props } from "./types";
import "./style.css";

export const CommunicationWindow: Component<Props> = (props) => {
  const { title, text, children, onClick } = props;
  return (
    <div class='flame25' onClick={onClick}>
      <Switch>
        <Match when={text}>
          <p class='fade'>{text}</p>
        </Match>
        <Match when={children}>{children}</Match>
      </Switch>
    </div>
  );
};
