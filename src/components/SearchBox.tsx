interface SearchBoxProps {
  query?: string;
  setQuery: Function;
  
}

const SearchBox = (props: SearchBoxProps) => {
  const { query, setQuery } = props;
  const containerStyle = { display: 'flex', width: 'full' };

  return (
    <div style={containerStyle}>
      <input
        type='text'
        placeholder='Search by name'
        value={query || ''}
        onChange={(event) => {
          setQuery(event.target.value);
        }}
        className='searchbox'
      />
    </div>
  );
};

export default SearchBox;
