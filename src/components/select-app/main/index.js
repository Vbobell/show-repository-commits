import React, { Component } from 'react';
import Select from '../select';
import RepositorySelected from '../repository-selected';
import RepositoryCommit from '../repository-commit';

class MainSelect extends Component {
  render() {
    return (
      <main>
        <section>
          <Select/>
        </section>
        <RepositorySelected/>
        <RepositoryCommit/>
      </main>
    );
  }
}

export default MainSelect;
