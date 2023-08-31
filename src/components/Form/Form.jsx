import React, { useState } from 'react';
import { Icon, Input, Forma } from './Form.styles';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const Form = () => {
  const [, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState('');

  const updateQueryString = event => {
    event.preventDefault();
    const searchQuery = search;
    if (searchQuery === '') {
      toast.error('Enter film details', {
        position: 'top-right',
        autoClose: 3000,
        closeOnClick: true,
        theme: 'light',
      });
      return setSearchParams({});
    }
    setSearchParams({ q: searchQuery, page: 1 });
    setSearch('');
  };

  const handleChangeSearch = event => {
    setSearch(event.target.value);
  };
  return (
    <Forma
      onSubmit={updateQueryString}
      style={{ marginBottom: 16 }}
      autoComplete="off"
    >
      <Input
        onChange={handleChangeSearch}
        value={search}
        type="text"
        name="searchQuery"
        placeholder="search film"
      />
      <Icon />
    </Forma>
  );
};

export default Form;
