import styled from 'styled-components';

export const Container = styled.section`
  background: ${({ theme }) => theme.colors.shapes};
  border-radius: 1rem;
  margin-top: -30px;
  padding: 70px 60px;
  filter: drop-shadow(0px 24px 64px rgba(0, 0, 0, 0.06));
  min-height: calc(100vh + 30px - 214px);
`;

export const Main = styled.main`
  margin-top: 3rem;
`;

export const List = styled.ul`
  list-style: none;
`;
