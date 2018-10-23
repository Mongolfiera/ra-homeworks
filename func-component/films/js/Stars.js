'use strict';

function Stars({count = 0}) {
  if (count >= 1 && count <= 5 && typeof count === 'number') {
    return (
      <ul className="card-body-stars u-clearfix">
        <li>
          {new Array(count).fill(<Star />)}
        </li>
      </ul>
    );
  }
}
