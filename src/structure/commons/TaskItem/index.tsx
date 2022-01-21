import { useTodo } from '@hooks/useTodo';
import {
  Box,
  Button,
  Item,
  TrashIcon,
  Checkbox,
  Text,
  CheckIcon,
} from './styles';

type TaskItemProps = {
  id: string;
  isComplete: boolean;
  title: string;
};

const TaskItem = ({ id, title, isComplete }: TaskItemProps) => {
  const { handleToggleTaskCompletion, handleRemoveTask } = useTodo();

  return (
    <Item key={id}>
      <Box>
        <Checkbox
          completed={`${isComplete}`}
          onClick={() => handleToggleTaskCompletion(id, !isComplete)}
        >
          <CheckIcon completed={`${isComplete}`} />
        </Checkbox>
        <Text completed={`${isComplete}`}>{title}</Text>
      </Box>

      <Button type="button" onClick={() => handleRemoveTask(id)}>
        <TrashIcon />
      </Button>
    </Item>
  );
};

export default TaskItem;
