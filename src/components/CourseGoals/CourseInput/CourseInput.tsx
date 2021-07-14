import React, { ChangeEvent, FormEvent, useState } from 'react';

import styled from 'styled-components';

import Button from '../../UI/Button/Button';

const FormControl = styled.div<{ invalid: boolean }>`
  margin: 0.5rem 0;

  label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
    color: ${({ invalid }) => (invalid ? 'red' : 'black')};
  }

  input {
    display: block;
    width: 100%;
    border: 1px solid ${({ invalid }) => (invalid ? 'red' : '#ccc')};
    background-color: ${({ invalid }) => (invalid ? 'ffd7d7' : 'transparent')};
    font: inherit;
    line-height: 1.5rem;
    padding: 0 0.25rem;
  }

  input:focus {
    outline: none;
    background: #fad0ec;
    border-color: #8b005d;
  }
`;

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
      <FormControl invalid={!isValid}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </FormControl>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
