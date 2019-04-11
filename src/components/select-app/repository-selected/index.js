import React, { Component } from 'react';
import { connect } from 'react-redux';

class RepositorySelected extends Component {
    render() {
        return (
            <section>
                {
                    this.props.repositories.map((repository) => {
                        return repository.selected ? repository.name : ""
                    })
                }
            </section>
        );
    }
}
const mapStateToProps = ({ repositories }) => {
    return {
        repositories: repositories.repositories
    }
}

export default connect(mapStateToProps)(RepositorySelected);