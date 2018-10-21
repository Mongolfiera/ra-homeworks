// https://codepen.io/Mongolfiera/pen/bmMgoJ

const getMenuItem = item => {
  return (
    <li>
      <a href={item.href}>{item.title}</a>
    </li>     
  );
}

const getMenuList = items => {
  if (items) { 
    return (
      <nav>
        <ul>
          { items.map(getMenuItem) }
        </ul>
      </nav>  
    );
  }
}

const Menu = (props) => {
  let {items, opened} = props;
  let openClass = opened ? 'menu menu-open' : 'menu';
  items = opened ? items : null;
  return (
    <div className={openClass}>
    <div className='menu-toggle'><span /></div>
      { getMenuList(items) }
    </div>
  );  
}
