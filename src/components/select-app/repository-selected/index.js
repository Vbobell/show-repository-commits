import React, { Component } from 'react';
import { connect } from 'react-redux';

import './index.scss';

class RepositorySelected extends Component {
    render() {
        return (
            this.props.repositories.map((repository) => {
                return repository.selected ? 
                <section key={repository.id} className="repo-selected-container">
                    <h2>{repository.name}</h2>
                </section> : ""
            })
        );
    }
}
const mapStateToProps = ({ repositories }) => {
    return {
        repositories: repositories.repositories
    }
}

export default connect(mapStateToProps)(RepositorySelected);