'use strict';

const Stars = ({count}) => {
  if (count >= 1 && count <= 5 && typeof count === 'number') {
    return (
      <ul className="card-body-stars u-clearfix">
        <li>
          {new Array(count).fill(<Star />)}
        </li>
      </ul>
    );
  } else {
    return null;
  }
}
