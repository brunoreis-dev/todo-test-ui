import { useTodo } from '@hooks/useTodo';
import { useState } from 'react';
import { Box, Container, Input, Title, Button } from './styles';

const TaskHeader = () => {
  const { handleCreateNewTask } = useTodo();
  const [newTaskTitle, setNewTaskTitle] = useState('');

  return (
    <Container>
      <Title>Minhas tasks</Title>

      <Box className="input-group">
        <Input
          type="text"
          placeholder="Adicionar novo todo"
          onChange={(e) => setNewTaskTitle(e.target.value)}
          value={newTaskTitle}
        />
        <Button
          onClick={() => {
            handleCreateNewTask(newTaskTitle);
            setNewTaskTitle('');
          }}
        >
          Adicionar
        </Button>
      </Box>
    </Container>
  );
};

export default TaskHeader;
