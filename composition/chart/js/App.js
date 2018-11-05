const HEIGHT = 250;

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function compareNumbers(a, b) {
  return a - b;
}

function Chart(props) {
  const chartClass = props.type === 'horizontal' ? 'Charts horizontal' : 'Charts';
  const max = props.data.reduce((max, serie) => Math.max(max, serie.reduce((serieMax, item) => Math.max(serieMax, item), 0)), 0);

  return (
    <div className={chartClass}>
      {props.data.map((serie, serieIndex) => 
        <ChartSerie type={props.type} colors={props.colors} labels={props.labels} serie={serie} serieIndex={serieIndex} max={max} />
      )}
    </div>
  );
}
 
function ChartSerie(props) {
  const scale = props.type === 'stacked' ? props.serie.reduce((carry, current) => carry + current, 0) : props.max;
  const sortedSerie = props.serie.slice(0).sort(compareNumbers);
  const chartHeight = props.type === 'horizontal' ? 'auto' : HEIGHT;
  const serieClass = props.type === 'horizontal' ? 'Charts--serie' : 'Charts--serie ' + props.type;
  return (
    <div 
      className={serieClass}
      key={props.serieIndex}
       style={{height: chartHeight}}
    >
      <label>{props.labels[props.serieIndex]}</label>
      {props.serie.map((item, itemIndex) => 
        <ChartItem type={props.type} color={props.colors[itemIndex]} sortedSerie={sortedSerie} item={item} itemIndex={itemIndex} scale={scale} />
      )}
    </div>
  ); 
}
  
function ChartItem(props) {
  const itemClass = props.type === 'horizontal' ? 'Charts--item' : 'Charts--item ' + props.type;
  const size = props.item / props.scale * 100;
  const itemOpacity = props.type === 'stacked' ? 1 : props.item / props.scale + .05;
  const style = {
                backgroundColor: props.color,
                opacity: itemOpacity,
                zIndex: props.item,
                };
  if (props.type === 'horizontal') {
    style.width = size + '%';
  } else {
    style.height = size + '%';
  }
  if (props.type === 'layered') {
    style.right = ((props.sortedSerie.indexOf(props.item) / (props.sortedSerie.length + 1)) * 100) + '%';
  }
  return (
    <div
      className={itemClass}
      style={style}
      key={props.itemIndex}
    >
      <b style={{color: props.color}}>{props.item}</b>
    </div>
  );
}

function Legend(props) {
  return (
    <div className="Legend">
      {props.labels.map((label, labelIndex) => {
    	return (
    	  <div>
    	    <span className="Legend--color" style={{ backgroundColor: props.colors[labelIndex % props.colors.length] }} />
    	    <span className="Legend--label">{ label }</span>
    	  </div>
    	);
      }) }
    </div>
  );  
}


class App extends React.Component {
  componentWillMount() {
    this.setState({
      data: [],
      series: ['France', 'Italy', 'England', 'Sweden', 'Germany'],
      labels: ['cats', 'dogs', 'horses', 'ducks', 'cows'],
      colors: ['#43A19E', '#7B43A1', '#F2317A', '#FF9824', '#58CF6C']
    })
  }

  componentDidMount() {
    this.populateArray();
    setInterval(this.populateArray.bind(this), 2000);
  }

  populateArray() {
    const series = 5;
    const serieLength = 5;

    let data = new Array(series).fill(new Array(serieLength).fill(0));
    data = data.map(serie => serie.map(item => getRandomInt(0, 20)));

    this.setState({ data });
  }

  render() {
    const { data, colors, labels, series } = this.state;
    return (
      <section>
        <Chart type={''} data={data} colors={colors} labels={labels} />
        <Chart type={'stacked'} data={data}  colors={colors} labels={labels} />
        <Chart type={'layered'} data={data}  colors={colors} labels={labels} />
        <Chart type={'horizontal'} data={data} colors={colors} labels={series} />
        <Legend labels={labels} colors={colors} />
      </section>
    );
  }
}
