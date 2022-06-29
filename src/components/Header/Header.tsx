import type { Component } from 'solid-js';
import { Props } from './types';
import './style.css';

export const Header: Component<Props> = () => {
  return (
    <article>
      <link
        href="https://fonts.googleapis.com/earlyaccess/hannari.css"
        rel="stylesheet"
      ></link>
      <header>
        <img class="logo" src="/src/assets/logo.jpg" />
        <h1>カクテルノミタイ</h1>
      </header>
    </article>
  );
};
