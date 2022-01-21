import SvgCheckIcon from '@assets/icons/CheckIcon';
import Trash from '@assets/icons/Trash';
import styled from 'styled-components';

type TaskItemStyleProps = {
  completed?: string;
};

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ebebeb;
  padding: 1rem 0;
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  outline: 0;
`;

export const Text = styled.p<TaskItemStyleProps>`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text};
  text-decoration: ${({ completed }) =>
    completed === 'true' ? 'line-through' : 'unset'};
  opacity: 0.6;
`;

export const Checkbox = styled.button<TaskItemStyleProps>`
  width: 16px;
  height: 16px;
  background-color: ${({ theme, completed }) =>
    completed === 'true' ? theme.colors.blue : theme.colors.background};
  border-radius: 2px;
  cursor: pointer;
  display: block;
`;

export const CheckIcon = styled(SvgCheckIcon)<TaskItemStyleProps>`
  width: 12px;
  opacity: ${({ completed }) => (completed === 'true' ? 1 : 0)};

  path {
    fill: ${({ theme }) => theme.colors.white};
  }
`;

export const Button = styled.button`
  background: transparent;
  border: 0;
`;

export const TrashIcon = styled(Trash)`
  width: 20px;

  path {
    fill: ${({ theme }) => theme.colors.textLight};
    transition: 0.3s ease-in-out;
  }

  &:hover {
    filter: brightness(0.5);

    path {
      fill: ${({ theme }) => theme.colors.black};
    }
  }
`;
