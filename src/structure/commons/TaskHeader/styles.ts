import styled from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => theme.breakpoints.tablet} {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.textTitle};
  font-size: 2.25rem;
  margin-bottom: 10px;

  ${({ theme }) => theme.breakpoints.tablet} {
    margin-bottom: 0;
  }
`;

export const Box = styled.div`
  align-items: center;
  background: #fff;
  font-size: 16px;

  ${({ theme }) => theme.breakpoints.largeMobile} {
    display: flex;
    gap: 0.25rem;
  }
`;

export const Input = styled.input`
  flex: 1;
  background: ${({ theme }) => theme.colors.background};
  border: 0;
  color: ${({ theme }) => theme.colors.text};
  padding: 12px 24px;

  border-radius: 8px;
  border: 0;
  width: 100%;
  margin-bottom: 10px;

  ${({ theme }) => theme.breakpoints.largeMobile} {
    width: auto;
    margin-bottom: 0;
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.textLight};
  }
`;

export const Button = styled.button`
  font-weight: 600;
  border-radius: 8px;
  border: 0;
  background: ${({ theme }) => theme.colors.green};
  color: #fff;
  padding: 14px;
  transition: filter 0.2s;
  width: 100%;
  text-align: center;

  ${({ theme }) => theme.breakpoints.largeMobile} {
    width: auto;
  }

  &:hover {
    filter: brightness(0.95);
  }
`;
