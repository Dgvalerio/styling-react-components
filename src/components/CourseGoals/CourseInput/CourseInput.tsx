import React, { ChangeEvent, FormEvent, useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = ({
  onAddGoal,
}: {
  onAddGoal: (value: any) => void;
}): JSX.Element => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setIsValid(event.target.value.length > 0);
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event: FormEvent) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      return;
    }
    onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label style={{ color: !isValid ? 'red' : 'black' }}>Course Goal</label>
        <input
          style={{
            borderColor: !isValid ? 'red' : '#ccc',
            backgroundColor: !isValid ? 'salmon' : 'transparent',
          }}
          type="text"
          onChange={goalInputChangeHandler}
        />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
