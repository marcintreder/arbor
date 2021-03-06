import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { rem } from 'polished';

import Flex from '../Flex';

const baseStyles = ({ theme }) => css`
  background-color: ${theme.colors.white};
  border-radius: ${theme.borderRadius.small};
  border: 1px solid ${theme.colors.grey60};
  color: ${theme.colors.white};
  height: ${rem('16px')};
  width: ${rem('16px')};
`;

const checkedStyles = ({ theme, checked, indeterminate }) =>
  checked &&
  css`
    background-color: ${indeterminate ? theme.colors.white : theme.colors.blue};
    border-color: ${theme.colors.blue};
    color: ${indeterminate ? theme.colors.blue : theme.colors.white};
  `;

const disabledStyles = ({ theme, checked, disabled }) =>
  disabled &&
  css`
    background: ${checked ? theme.colors.grey20 : theme.colors.white};
    border-color: ${theme.colors.grey20};
    color: ${checked ? theme.colors.grey50 : theme.colors.white};
  `;

const StyledCheckbox = styled(Flex)`
  ${baseStyles};
  ${checkedStyles};
  ${disabledStyles};
`;

StyledCheckbox.defaultProps = {
  alignItems: 'center',
  justifyContent: 'center'
};

export default StyledCheckbox;
