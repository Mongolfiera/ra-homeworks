const SearchBox = (props) => {
  return (
    <input 
      type="text" 
      placeholder="Поиск по названию или автору"
      onChange={event => props.filterBooks(event.currentTarget.value)}
    />
  );
};
