import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getRepositories, getSelectedRepository, getCommitsRepository } from '../../../store/actions';

class Select extends Component {
  componentDidMount() {
    this.props.getRepositories();
  }

  changeRepository = (e) => {
    let option = e.target.querySelector(`option[value="${e.target.value}"]`);
    
    this.props.getSelectedRepository(e.target.value);
    this.props.getCommitsRepository(option.getAttribute('data-name'));
  }

  render() {
    return (
      <select onChange={this.changeRepository}>
        { 
          this.props.repositories.map((repo) => {
            return <option key={repo.id} value={repo.id} data-name={repo.name}>{repo.name}</option>
          }) 
        }
      </select>
    );
  }
}

const mapStateToProps = ({ repositories }) => {
  return {
    repositories: repositories.repositories
  }
}

export default connect(mapStateToProps, { getRepositories, getSelectedRepository, getCommitsRepository })(Select);
