'use strict';

const colorScheme = {
  'unisex': 'black',
  'male': 'blue',
  'female': 'orange'
}

const Items = ({items}) => {
  return ( 
    <main>
      {items.map(item => <Item color={colorScheme[item.type]} item={item} />)}
    </main>
  );
}

const App = ({items}) => {return(
    <Items items={items} />
)};
