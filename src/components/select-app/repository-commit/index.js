import React, { Component } from 'react';
import { connect } from 'react-redux';


class RepositoryCommit extends Component {
    render() {
        return (
            <section>
                {
                    this.props.commits.map(({ commit, sha }) => {
                        return (
                            <article key={sha}>
                                <h3>{commit.author.name}</h3>
                                <p>{commit.message}</p>
                            </article>
                        )
                    })
                }
            </section>
        );
    }
}
const mapStateToProps = ({ commits }) => {
    return {
        commits: commits.commits
    }
}

export default connect(mapStateToProps)(RepositoryCommit);