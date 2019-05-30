import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCommitsRepository } from '../../../store/actions';

import "./index.scss";

class RepositoryCommit extends Component {
    render() {
        if (this.props.commits[0].sha != 0) {
            return (
                <section className="repo-commits-container" onScroll={this.onScrollContainer}>
                    {
                        
                        this.props.commits.map(({ commit, sha }) => {
                            return (
                                <article key={sha} className="repo-commits-item">
                                    <h3>{commit.author.name}</h3>
                                    <p>{commit.message}</p>
                                </article>
                            )
                        })
                    }
                </section>
            );
        } else {
            return (
                <section className="repo-commits-container"></section>
            )
        }
    }

    onScrollContainer = (e) => {
        let element = e.target;

        if (element.scrollHeight - element.scrollTop === element.clientHeight) {
            this.props.getCommitsRepository(this.props.repoName, this.props.commitsOfpage + 30);
        }
    }
}
const mapStateToProps = ({ commits, repositories }) => {
    return {
        commits: commits.commits,
        commitsOfpage: commits.commitsOfpage,
        repoName: commits.repoName,
        repositories: repositories.repositories
    }
}

export default connect(mapStateToProps, { getCommitsRepository })(RepositoryCommit);