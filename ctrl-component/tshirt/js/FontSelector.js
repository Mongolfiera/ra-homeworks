const FontSelector = ({fonts, selectedFont, onSelect}) => {
 
  const handleSelect = event => {
    selectedFont = fonts.filter(font => font.name === event.target.value)[0];
    onSelect(selectedFont);
  }

  return (
    <div className="font-picker">
      
    {fonts.map((font, i) => {
      return (
        <div className="grid center font-item">
          <input type="radio" name="font" value={font.name} id={font.name} onChange={handleSelect}/>
          <label htmlFor={font.name} class="grid-1">
            <PictureFont text={'abc'} path={font.path}/>
          </label>
        </div>
        );
      })}

    </div>
  );

};
