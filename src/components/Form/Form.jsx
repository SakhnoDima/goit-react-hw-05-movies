import React from 'react';
import { Icon, Input, Forma } from './Form.styles';

const Form = ({ updateQueryString, value }) => {
  return (
    <Forma
      onSubmit={updateQueryString}
      style={{ marginBottom: 16 }}
      autoComplete="off"
    >
      <Input type="text" name="searchQuery" placeholder="search film" />
      <Icon />
    </Forma>
  );
};

export default Form;
