import React from 'react';

import styles from './Button.module.css';

const Button = ({
  type,
  onClick,
  children,
}: {
  type: 'button' | 'submit' | 'reset' | undefined;
  // eslint-disable-next-line react/require-default-props
  onClick?: () => void;
  children: any;
}): JSX.Element => (
  // eslint-disable-next-line react/button-has-type
  <button type={type} className={styles.button} onClick={onClick}>
    {children}
  </button>
);

export default Button;
