import { Logo } from '@assets/icons';
import styled from 'styled-components';

export const Container = styled.header`
  background: ${({ theme }) => theme.colors.blue};
  padding-top: 2rem;
`;

export const Box = styled.header`
  max-width: 1120px;
  margin: 0 auto;
  padding: ${({ theme }) =>
    `${theme.rem(32)} ${theme.rem(16)} ${theme.rem(120)}`};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LogoIcon = styled(Logo)`
  width: 98px;
`;
