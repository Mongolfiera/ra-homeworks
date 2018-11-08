'use strict';


const data = [
  {
    sectionhead: 'Компоненты',
    article: 'Каждый компонент являются законченной частью пользовательского интерфейса и сам управляет своим состоянием, а композиция компонентов (соединение) позволяет создавать более сложные компоненты. Таким образом, создается иерархия компонентов, причем каждый отдельно взятый компонент независим сам по себе. Такой подход позволяет строить сложные интерфейсы, где есть множество состояний, и взаимодействовать между собой.'
  },
  {
    sectionhead: 'Выучил раз, используй везде!',
    article: 'После изучения React вы сможете использовать его концепции не только в браузере, но также и при разработке мобильных приложений с использованием React Native.'
  },
  {
    sectionhead: 'Использование JSX',
    article: 'JSX является языком, расширяющим синтаксис стандартного Javascript. По факту он позволяет писать HTML-код в JS-скриптах. Такой подход упрощает разработку компонентов и повышает читаемость кода.'
  }      
];

const Accordion = props => {
  const {header, data} = props;
  return (
    <main className="main">
      <h2 className="title">{header}</h2>
      {data.map(item => <AccordionSection item={item} />)} 
    </main>     
  );
}

class AccordionSection extends React.Component {
  constructor(props) {
    super(props);
    this.state={isOpen: false};
    this.toggleOpen = this.toggleOpen.bind(this);
  }
  
  toggleOpen() {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
  
  render() {
    const {item} = this.props;
    const className = this.state.isOpen ? 'section open' : 'section';
    return (
      <section className={className} key={item.sectionhead}>
        <button>toggle</button>
        <h3 className="sectionhead" onClick={this.toggleOpen}>{item.sectionhead}</h3>
        <div className="articlewrap">
          <div className="article">{item.article}</div>
        </div>
      </section>    
    );
  }
}

ReactDOM.render(<Accordion header={'React'} data={data} />, document.getElementById('accordian'));
