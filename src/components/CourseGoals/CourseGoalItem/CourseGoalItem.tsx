import React from 'react';

import './CourseGoalItem.css';

const CourseGoalItem = ({
  id,
  onDelete,
  children,
}: {
  id: number;
  onDelete: (value: number) => void;
  children: any;
}): JSX.Element => {
  // const [deleteText, setDeleteText] = useState('');

  const deleteHandler = () => {
    // setDeleteText('(Deleted!)');
    onDelete(id);
  };

  return (
    <li className="goal-item" onClick={deleteHandler}>
      {children}
    </li>
  );
};

export default CourseGoalItem;
