import React from 'react';

import CourseGoalItem from '../CourseGoalItem/CourseGoalItem';
import './CourseGoalList.css';

const CourseGoalList = ({
  items,
  onDeleteItem,
}: {
  items: any[];
  onDeleteItem: (value: any) => void;
}): JSX.Element => (
  <ul className="goal-list">
    {items.map((goal) => (
      <CourseGoalItem key={goal.id} id={goal.id} onDelete={onDeleteItem}>
        {goal.text}
      </CourseGoalItem>
    ))}
  </ul>
);

export default CourseGoalList;
