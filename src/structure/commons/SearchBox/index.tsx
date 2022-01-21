import { useTodo } from '@hooks/useTodo';
import { useState } from 'react';
import {
  Container,
  Input,
  Label,
  SearchButton,
  SearchCompleted,
} from './styles';

const SearchBox = () => {
  const { handleSearchTodos } = useTodo();
  const [searchName, setSearchName] = useState('');
  const [searchCompleted, serSearchCompleted] = useState(false);

  function ToggleSearchCompleted() {
    serSearchCompleted(!searchCompleted);
    handleSearchTodos(searchName, !searchCompleted);
  }

  return (
    <Container>
      <Label>
        <Input
          onChange={(e) => setSearchName(e.currentTarget.value)}
          value={searchName}
          placeholder="buscar"
        />
        <SearchButton
          onClick={() => handleSearchTodos(searchName, searchCompleted)}
        >
          {searchName ? 'Buscar por nome' : 'Limpar busca'}
        </SearchButton>
      </Label>
      <SearchCompleted
        active={searchCompleted ? 'true' : 'false'}
        onClick={ToggleSearchCompleted}
      >
        Filtrar Concluídos
      </SearchCompleted>
    </Container>
  );
};

export { SearchBox };
