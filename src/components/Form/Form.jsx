import React from 'react';

const Form = ({ updateQueryString }) => {
  return (
    <form
      style={{ marginBottom: 16 }}
      autoComplete="off"
      onSubmit={updateQueryString}
    >
      <input type="text" name="searchQuery" placeholder="search film" />
    </form>
  );
};

export default Form;
