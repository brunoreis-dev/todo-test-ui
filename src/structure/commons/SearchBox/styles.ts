import styled from 'styled-components';

type SearchBoxStyles = {
  active?: string;
};

export const Container = styled.header`
  display: flex;
  flex-direction: column-reverse;
  width: 100%;
  margin-top: 50px;

  ${({ theme }) => theme.breakpoints.largeMobile} {
    flex-direction: column;
  }

  ${({ theme }) => theme.breakpoints.tablet} {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 50px;
  }
`;

export const SearchCompleted = styled.button<SearchBoxStyles>`
  background-color: ${({ theme, active }) =>
    active === 'true' ? theme.colors.blue : theme.colors.textLight};
  border-radius: 6px;
  color: ${({ theme }) => theme.colors.white};
  height: 100%;
  padding: 0 20px;
  height: 50px;
  margin-bottom: 20px;

  ${({ theme }) => theme.breakpoints.tablet} {
    margin-bottom: 0;
  }
`;

export const Label = styled.div`
  height: 100%;
  margin-bottom: 20px;

  ${({ theme }) => theme.breakpoints.largeMobile} {
    display: flex;
    align-items: flex-end;
  }

  ${({ theme }) => theme.breakpoints.tablet} {
    margin-bottom: 0;
  }
`;

export const Input = styled.input`
  margin-right: 20px;
  height: 100%;
  border: 0;
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  padding: 0 24px;
  border-radius: 8px;
  height: 50px;
  margin-bottom: 10px;
  width: 100%;

  ${({ theme }) => theme.breakpoints.largeMobile} {
    margin-bottom: 0;
  }

  ${({ theme }) => theme.breakpoints.tablet} {
    width: auto;
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.textLight};
  }
`;

export const SearchButton = styled.button`
  background-color: ${({ theme }) => theme.colors.blue};
  border-radius: 6px;
  color: ${({ theme }) => theme.colors.white};
  height: 100%;
  font-size: 16px;
  width: 100%;
  height: 50px;

  ${({ theme }) => theme.breakpoints.largeMobile} {
    width: 180px;
    min-width: 180px;
    display: table;
  }
`;
