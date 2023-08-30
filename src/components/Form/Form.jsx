import React from 'react';

const Form = ({ updateQueryString }) => {
  return (
    <form autoComplete="off" onSubmit={updateQueryString}>
      <input type="text" name="searchQuery" placeholder="search film" />
    </form>
  );
};

export default Form;
