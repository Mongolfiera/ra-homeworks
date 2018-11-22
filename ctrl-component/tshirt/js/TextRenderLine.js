const TextRenderLine = ({value, onChange}) => {
 
  const handleChange = event => {
    event.target.value = event.target.value.replace(/[^a-z\s]/gi, '');    
    onChange(event.target.value.toLowerCase());
  }
  
  return (
    <div class="type-text">
      <textarea name="text" id="font-text" cols="30" rows="2" placeholder="Введите текст для футболки" onChange={handleChange} value={value} />
    </div>
  );
};
