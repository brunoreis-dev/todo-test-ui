import { SearchBox } from '@commons/SearchBox';
import TaskHeader from '@commons/TaskHeader';
import TaskItem from '@commons/TaskItem';
import { useTodo } from '@hooks/useTodo';

import { Container, List, Main } from './styles';

const TaskList = () => {
  const { tasks } = useTodo();

  return (
    <Container className="task-list container">
      <TaskHeader />
      <SearchBox />
      <Main>
        <List>
          {tasks.map((task) => (
            <TaskItem
              key={task.id}
              id={task.id}
              title={task.name}
              isComplete={task.is_complete}
            />
          ))}
        </List>
      </Main>
    </Container>
  );
};

export default TaskList;
