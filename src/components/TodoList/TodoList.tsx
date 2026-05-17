import { Todo } from '../../types/Todo';
import cn from 'classnames';

type Props = {
  todos: Todo[];
  onClickShowModal: () => void;
  setSelectedTodo: (todo: Todo) => void;
  isTodoSelected: boolean;
  setIsTodoSelected: (isSelected: boolean) => void;
};

export const TodoList: React.FC<Props> = ({
  todos,
  onClickShowModal,
  setSelectedTodo,
  isTodoSelected,
  setIsTodoSelected,
}) => {
  return (
    <table className="table is-narrow is-fullwidth">
      <thead>
        <tr>
          <th>#</th>
          <th>
            <span className="icon">
              <i className="fas fa-check" />
            </span>
          </th>
          <th>Title</th>
          <th> </th>
        </tr>
      </thead>

      <tbody>
        {todos.map((todo: Todo) => (
          <>
            <tr key={todo.id} data-cy="todo" className="">
              <td className="is-vcentered">{todo.id}</td>
              <td className="is-vcentered">
                {todo.completed && (
                  <span className="icon" data-cy="iconCompleted">
                    <i className="fas fa-check" />
                  </span>
                )}
              </td>
              <td className="is-vcentered is-expanded">
                <p
                  className={cn({
                    'has-text-danger': !todo.completed,
                    'has-text-success': todo.completed,
                  })}
                >
                  {todo.title}
                </p>
              </td>
              <td className="has-text-right is-vcentered">
                <button
                  data-cy="selectButton"
                  className="button"
                  type="button"
                  onClick={() => {
                    onClickShowModal();
                    setSelectedTodo(todo);
                    setIsTodoSelected(true);
                  }}
                >
                  <span className="icon">
                    <i
                      className={cn('far', {
                        'fa-eye': !isTodoSelected,
                        'fa-eye-slash': isTodoSelected,
                      })}
                    />
                  </span>
                </button>
              </td>
            </tr>
          </>
        ))}
      </tbody>
    </table>
  );
};
