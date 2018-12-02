import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import theme from '../theme';

export default function UXPinWrapper({ children }) {
  let fortawesome = document.createElement('script');
  fortawesome.setAttribute('src', 'https://use.fortawesome.com/27af4258.js');
  document.head.appendChild(fortawesome);
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
