'use strict'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFilter: 'All'
    };
    this.selectFilter = this.selectFilter.bind(this);
    this.filterProjects = this.filterProjects.bind(this);
  }
  
  selectFilter(filter) {
    this.setState({
      selectedFilter: filter
    });
  }
  
  filterProjects() {
    return (
      this.state.selectedFilter === 'All' ? this.props.projects : this.props.projects.filter(project => project.category === this.state.selectedFilter)
    );
  }
    
  render() {
    return (
      <div>
        <Toolbar
          filters={this.props.filters}
          selected={this.state.selectedFilter}
          onSelectFilter={this.selectFilter} />
        <Portfolio projects={this.filterProjects()} />
      </div>
    );
  }
} 
