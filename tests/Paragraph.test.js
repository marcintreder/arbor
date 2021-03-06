import React from 'react';
import { matchers } from 'jest-emotion';
import createWithTheme from '../utils/createWithTheme';

import { Paragraph } from '../src';

expect.extend(matchers);

describe('<Paragraph />', () => {
  describe('props', () => {
    describe('variant', () => {
      ['ui', 'longForm', 'tiny'].forEach(variant => {
        it(`renders a ${variant} variant`, () => {
          const tree = createWithTheme(
            <Paragraph variant={variant}>Hello World</Paragraph>
          );

          expect(tree).toMatchSnapshot();
        });
      });
    });
  });
});
