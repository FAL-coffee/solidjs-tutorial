import type { Component } from 'solid-js';
import { Props } from './types';
import './style.css';

export const RichButton: Component<Props> = props => {
  const { label, onClick } = props;

  return (
    <a onClick={onClick} class="btn btn-solid-gold">
      {label}
    </a>
  );
};
