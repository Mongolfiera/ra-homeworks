'use strict';

fetch(' https://neto-api.herokuapp.com/etsy')
  .then((response) => {
    if (200 <= response.status && response.status < 300) {
      return response;
    }
    throw new Error(response.statusText);
  })
  .then((response) => response.json())
  .then((items) => { ReactDOM.render(<Listing items={items} />, document.getElementById('root')) })
  .catch((error) => { console.log(error)});

const cutOff = str => {
  return str.slice(0, 49).concat(str.slice(50) && '...');
}

const highlightLevel = quantity => {
  return (
    quantity <= 10 && 'level-low' || quantity <= 20 && 'level-medium' || 'level-high'
  );
}

const showCurrency = (price, currency) => {
  const formatCurrency = (num, currency) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency }).format(num);
  }
  return (currency === 'USD' ||  currency === 'EUR') && formatCurrency(price, currency) || `${price} ${currency}`;
}

const Listing = ({items}) => {
  return (
  <div className="item-list">
    { items.map( item => { 
      return (
        <div key = { item.listing_id } className="item">
          <div className="item-image">
            <a href={item.url}>
              <img src={item.MainImage.url_570xN} />
            </a>
          </div>
          <div className="item-details">
            <p className="item-title">{cutOff(item.title)}</p>
            <p className="item-price">{showCurrency(item.price, item.currency_code)}</p>
            <p className={'item-quantity '.concat(highlightLevel(item.quantity))}>{item.quantity} left</p>
          </div>
        </div>   
      );}
    ) }
  </div>
  );
}
