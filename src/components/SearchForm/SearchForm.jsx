import { useState } from 'react';
import PropTypes from 'prop-types';
import { Searchbar, Form, SearchButton, SearchInput } from './SearchForm.styled';

const SearchForm = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleChange = event => {
    const { value } = event.target;
    setQuery(value);
  };

  const handleSubmit = async event => {
    event.preventDefault();
    if (query === '') {
      return;
    }
    onSubmit(query)
    setQuery('');
  };

  return (
    <Searchbar>
      <Form onSubmit={handleSubmit}>
        <SearchInput type="text" value={query} onChange={handleChange} />
        <SearchButton type="submit"></SearchButton>
      </Form>
    </Searchbar>
  );
};

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}

export default SearchForm;
