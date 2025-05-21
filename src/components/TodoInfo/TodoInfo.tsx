import React from 'react';
import usersFromServer from '../../api/users';
import classNames from 'classnames';
import { UserInfo } from '../UserInfo';
import { Todo } from '../../types/todo';
import { User } from '../../types/user';

type Props = {
  todo: Todo;
};

export const TodoInfo: React.FC<Props> = ({ todo }) => {
  const user: User | undefined = usersFromServer.find(
    us => us.id === todo.userId,
  );

  return (
    <article
      data-id={todo.id}
      className={classNames('TodoInfo', {
        'TodoInfo--complited': todo.comleted === true,
      })}
      key={todo.id}
    >
      <h2 className="TodoInfo_title">{todo.title} </h2>

      {user && <UserInfo user={user} />}
    </article>
  );
};
