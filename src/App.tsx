import type { Component } from 'solid-js';
import { JSX } from 'solid-js';
import { text, setText } from './text';
import { Header, RichButton, CommunicationWindow } from './components';

export const App: Component = () => {
  return (
    <>
      <Header />
      <div
        style={{
          position: 'fixed',
          bottom: 0,
          width: '100%',
        }}
      >
        <CommunicationWindow
          title="aa"
          children={
            <>
              <p>こんにちは。</p>
              <p>いらっしゃい。</p>
            </>
          }
        />
      </div>
    </>
  );
};
