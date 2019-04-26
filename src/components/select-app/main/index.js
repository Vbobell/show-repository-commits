import React, { Component } from 'react';
import Select from '../select';
import RepositorySelected from '../repository-selected';
import RepositoryCommit from '../repository-commit';

import './index.scss';

class MainSelect extends Component {
  render() {
    return (
      <main>
        <section className="repo-select-container">
          <Select/>
        </section>
        <RepositorySelected/>
        <RepositoryCommit/>
      </main>
    );
  }
}

export default MainSelect;
