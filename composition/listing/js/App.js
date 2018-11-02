'use strict';

const colorScheme = {
  'unisex': 'black',
  'male': 'blue',
  'female': 'orange'
}

const getItems = ({items}) => items.map(item => 
  <Item color={colorScheme[item.type]} item={item} />
);

const App = ({items}) => {console.log(items); return(
  <main>
    {getItems({items})}
  </main>
)};
