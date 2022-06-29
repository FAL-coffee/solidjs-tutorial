import type { Component } from 'solid-js';
import { JSX } from 'solid-js';
import { text, setText } from './text';

export const App: Component = () => {
  const onChangeHandler: JSX.EventHandlerUnion<
    HTMLInputElement,
    Event
  > = event => {
    setText((event.target as HTMLInputElement).value);
  };

  return (
    <>
      <input type="text" onInput={onChangeHandler} />
      <p>Current input: {text()}</p>
    </>
  );
};
