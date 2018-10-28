'use strict';

const HexInput = props => {
  function convertColor(event) {
    props.onChange(event.currentTarget.value);
  }

  return (
    <input
      value={props.value}
      onChange={convertColor}
      type="text"
      className="hex-field js-hex-field"
      placeholder="#000000" />
  );
};
