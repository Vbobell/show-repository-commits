import React, { Component } from 'react';
import { connect } from 'react-redux';

import Section from '../section';

class RepositorySelected extends Component {
    render() {
        return (
            <Section sectionContent={
                this.props.repositories.map((repository) => {
                    return repository.selected ? repository.name : ""
                })
            } />
        );
    }
}
const mapStateToProps = ({ repositories }) => {
    return {
        repositories: repositories.repositories
    }
}

export default connect(mapStateToProps)(RepositorySelected);