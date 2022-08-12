interface SearchBoxProps {
  query: string;
  setQuery: Function;
}

const SearchBox = (props: SearchBoxProps) => {
  const { query, setQuery } = props;
  const containerStyle = { display: 'flex', width: 'full' };
  const searchBoxStyle = {
    padding: '10px',
    margin: '20px',
    borderRadius: '20px ',
    border: '1px solid gray',
    width: '100%',
    height: '40px',
  };

  return (
    <div style={containerStyle}>
      <input
        type='text'
        placeholder='Search by name or category'
        value={query}
        onChange={(event) => {
          setQuery(event.target.value);
        }}
        style={searchBoxStyle}
      />
    </div>
  );
};

export default SearchBox;
