import { ReactNode } from 'react';
import { Container } from './styles';

type BackgroundProps = {
  children: ReactNode;
  large?: boolean;
};

const PageContainer = ({ children }: BackgroundProps) => {
  return <Container>{children}</Container>;
};

export default PageContainer;
